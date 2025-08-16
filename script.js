// 마크다운 콘텐츠를 동적으로 로드
const markdownContent = {};

const contentData = {};

// 심플한 파란색 커서 구현
function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // 마우스 움직임 추적
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 호버 효과
    function addHoverListeners() {
        const elements = document.querySelectorAll('a, button, .skill-badge, .project-card, .experience-card, .education-item, .etc-item, .language-switcher button');
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    }

    addHoverListeners();

    // 동적으로 추가되는 요소들을 위한 MutationObserver
    const observer = new MutationObserver(() => {
        addHoverListeners();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

async function loadContent(lang) {
    if (contentData[lang]) {
        renderContent(contentData[lang]);
        return;
    }

    try {
        // 마크다운 파일에서 콘텐츠 로드
        if (!markdownContent[lang]) {
            console.log(`Attempting to fetch: portfolio_draft_${lang}.md`);
            
            // GitHub Pages의 절대 경로로 시도
            const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
            const fileUrl = `${baseUrl}portfolio_draft_${lang}.md`;
            
            console.log(`Fetching from: ${fileUrl}`);
            
            const response = await fetch(fileUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'text/plain',
                    'Cache-Control': 'no-cache'
                }
            });
            
            if (!response.ok) {
                console.error(`HTTP ${response.status}: ${response.statusText}`);
                throw new Error(`Failed to fetch ${lang} content: ${response.status} ${response.statusText}`);
            }
            
            markdownContent[lang] = await response.text();
            console.log(`Successfully loaded ${lang} content:`, markdownContent[lang].substring(0, 100) + '...');
        }
        
        contentData[lang] = parseMarkdown(markdownContent[lang]);
        renderContent(contentData[lang]);
    } catch (error) {
        console.error(`Error loading content for ${lang}:`, error);
        
        // 폴백: 다른 경로들 시도
        try {
            console.log('Trying fallback paths...');
            const fallbackPaths = [
                `./portfolio_draft_${lang}.md`,
                `/portfolio_draft_${lang}.md`,
                `portfolio_draft_${lang}.md?t=${Date.now()}` // 캐시 방지
            ];
            
            for (const path of fallbackPaths) {
                try {
                    console.log(`Trying fallback path: ${path}`);
                    const response = await fetch(path);
                    if (response.ok) {
                        markdownContent[lang] = await response.text();
                        contentData[lang] = parseMarkdown(markdownContent[lang]);
                        renderContent(contentData[lang]);
                        console.log(`Success with fallback path: ${path}`);
                        return;
                    }
                } catch (fallbackError) {
                    console.log(`Fallback path ${path} failed:`, fallbackError);
                }
            }
            
            throw new Error('All fallback paths failed');
        } catch (fallbackError) {
            console.error('All attempts failed:', fallbackError);
            renderErrorMessage(lang);
        }
    }
}

function parseMarkdown(markdown) {
    const sections = {};
    let currentSection = '';
    const lines = markdown.split('\n');

    for (const line of lines) {
        if (line.startsWith('## ')) {
            const sectionTitle = line.substring(3).trim();
            currentSection = sectionTitle.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-가-힣]/g, '');
            sections[currentSection] = '';
        } else if (currentSection) {
            sections[currentSection] += line + '\n';
        }
    }

    return sections;
}

function renderSkills(skillsContent) {
    const skillsContainer = document.getElementById('skills').querySelector('.content');
    const lines = skillsContent.split('\n').filter(line => line.trim());
    let html = '';
    let currentCategory = '';
    let currentSkills = [];

    for (const line of lines) {
        if (line.startsWith('### ')) {
            if (currentCategory && currentSkills.length > 0) {
                html += `
                    <div class="skill-group">
                        <h3>${currentCategory}</h3>
                        <div class="skill-badges">
                            ${currentSkills.map(skill => `<span class="skill-badge">${skill.trim()}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            currentCategory = line.substring(4).trim();
            currentSkills = [];
        } else if (line.trim() && !line.startsWith('#') && currentCategory) {
            const skills = line.split(',').map(s => s.trim()).filter(s => s);
            currentSkills.push(...skills);
        }
    }

    if (currentCategory && currentSkills.length > 0) {
        html += `
            <div class="skill-group">
                <h3>${currentCategory}</h3>
                <div class="skill-badges">
                    ${currentSkills.map(skill => `<span class="skill-badge">${skill.trim()}</span>`).join('')}
                </div>
            </div>
        `;
    }

    skillsContainer.innerHTML = html;
}

function parseProjectTitle(titleLine) {
    // 제목 | 기간 | 링크1 | 링크2 형식으로 파싱
    const parts = titleLine.split(' | ');
    const title = parts[0];
    const period = parts[1] || '';
    const links = parts.slice(2).filter(link => link.trim());
    
    return { title, period, links };
}

function renderExperience(experienceContent) {
    const experienceContainer = document.getElementById('experience').querySelector('.content');
    const lines = experienceContent.split('\n').filter(line => line.trim());
    let html = '';
    let currentExperience = '';
    let currentPeriod = '';
    let currentDetails = [];

    for (const line of lines) {
        if (line.startsWith('### ')) {
            if (currentExperience) {
                html += `
                    <div class="experience-card">
                        <div class="experience-period">${currentPeriod}</div>
                        <div class="experience-info">
                            <h3>${currentExperience}</h3>
                            <ul>
                                ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }
            const parts = line.substring(4).trim().split(' | ');
            currentExperience = parts[0];
            currentPeriod = parts[1] || '';
            currentDetails = [];
        } else if (line.startsWith('- ')) {
            currentDetails.push(line.substring(2).trim());
        }
    }

    if (currentExperience) {
        html += `
            <div class="experience-card">
                <div class="experience-period">${currentPeriod}</div>
                <div class="experience-info">
                    <h3>${currentExperience}</h3>
                    <ul>
                        ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    experienceContainer.innerHTML = html;
}

function renderProjects(projectsContent) {
    const projectsContainer = document.getElementById('projects').querySelector('.content');
    const lines = projectsContent.split('\n').filter(line => line.trim());
    let html = '';
    let currentProject = '';
    let currentPeriod = '';
    let currentLinks = [];
    let currentDetails = [];

    for (const line of lines) {
        if (line.startsWith('### ')) {
            if (currentProject) {
                const linksHtml = currentLinks.length > 0 ? `
                    <div class="project-links">
                        ${currentLinks.map(link => {
                            const isGithub = link.includes('github.com');
                            const isDemo = link.includes('demo') || link.includes('live') || (!link.includes('github.com') && link.startsWith('http'));
                            const linkText = isGithub ? 'GitHub' : isDemo ? 'Demo' : 'Link';
                            return `<a href="${link}" target="_blank" class="project-link">${linkText}</a>`;
                        }).join('')}
                    </div>
                ` : '';

                html += `
                    <div class="project-card">
                        <div class="project-header">
                            <h3>${currentProject}</h3>
                            ${currentPeriod ? `<div class="project-period">${currentPeriod}</div>` : ''}
                            ${linksHtml}
                        </div>
                        <div class="project-content">
                            <ul>
                                ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }
            const parsed = parseProjectTitle(line.substring(4).trim());
            currentProject = parsed.title;
            currentPeriod = parsed.period;
            currentLinks = parsed.links;
            currentDetails = [];
        } else if (line.startsWith('- ')) {
            currentDetails.push(line.substring(2).trim());
        }
    }

    if (currentProject) {
        const linksHtml = currentLinks.length > 0 ? `
            <div class="project-links">
                ${currentLinks.map(link => {
                    const isGithub = link.includes('github.com');
                    const isDemo = link.includes('demo') || link.includes('live') || (!link.includes('github.com') && link.startsWith('http'));
                    const linkText = isGithub ? 'GitHub' : isDemo ? 'Demo' : 'Link';
                    return `<a href="${link}" target="_blank" class="project-link">${linkText}</a>`;
                }).join('')}
            </div>
        ` : '';

        html += `
            <div class="project-card">
                <div class="project-header">
                    <h3>${currentProject}</h3>
                    ${currentPeriod ? `<div class="project-period">${currentPeriod}</div>` : ''}
                    ${linksHtml}
                </div>
                <div class="project-content">
                    <ul>
                        ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    projectsContainer.innerHTML = html;
}

function convertMarkdownToHTML(markdown) {
    if (typeof marked !== 'undefined') {
        return marked.parse(markdown);
    }
    
    // marked.js가 로드되지 않은 경우 간단한 변환
    let html = markdown
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/# (.*)/g, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/- (.*)/g, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
        .replace(/<\/ul>\s*<ul>/g, '')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.+)$/gm, '<p>$1</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p><h/g, '<h')
        .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
        .replace(/<p><ul>/g, '<ul>')
        .replace(/<\/ul><\/p>/g, '</ul>');
    
    return html;
}

function renderEducation(educationContent) {
    const educationContainer = document.getElementById('education').querySelector('.content');
    const lines = educationContent.split('\n').filter(line => line.trim());
    let html = '';
    let currentEducation = '';
    let currentPeriod = '';
    let currentDetails = [];

    for (const line of lines) {
        if (line.startsWith('### ')) {
            if (currentEducation) {
                html += `
                    <div class="education-item">
                        <div class="education-period">${currentPeriod}</div>
                        <div class="education-item-info">
                            <h3>${currentEducation}</h3>
                            ${currentDetails.length > 0 ? `
                                <ul>
                                    ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                                </ul>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
            
            // 제목과 기간 분리
            const content = line.substring(4).trim();
            const periodMatch = content.match(/\(([^)]+)\)$/);
            if (periodMatch) {
                currentPeriod = periodMatch[1];
                currentEducation = content.replace(/\s*\([^)]+\)$/, '').trim();
            } else {
                currentEducation = content;
                currentPeriod = '';
            }
            currentDetails = [];
        } else if (line.startsWith('- ')) {
            currentDetails.push(line.substring(2).trim());
        } else if (line.trim() && !line.startsWith('#') && currentEducation) {
            currentDetails.push(line.trim());
        }
    }

    // 마지막 항목 처리
    if (currentEducation) {
        html += `
            <div class="education-item">
                <div class="education-period">${currentPeriod}</div>
                <div class="education-item-info">
                    <h3>${currentEducation}</h3>
                    ${currentDetails.length > 0 ? `
                        <ul>
                            ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        `;
    }

    educationContainer.innerHTML = html;
}

function renderEtc(etcContent) {
    const etcContainer = document.getElementById('etc').querySelector('.content');
    const lines = etcContent.split('\n').filter(line => line.trim());
    let html = '';
    let currentEtc = '';
    let currentPeriod = '';
    let currentRole = '';
    let currentDetails = [];

    for (const line of lines) {
        if (line.startsWith('### ')) {
            if (currentEtc) {
                html += `
                    <div class="etc-item">
                        <div class="etc-period">${currentPeriod}</div>
                        <div class="etc-item-info">
                            <h3>${currentEtc}</h3>
                            ${currentRole ? `<div class="subtitle">${currentRole}</div>` : ''}
                            ${currentDetails.length > 0 ? `
                                <ul>
                                    ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                                </ul>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
            
            // 제목, 역할, 기간 분리
            const content = line.substring(4).trim();
            const periodMatch = content.match(/\(([^)]+)\)$/);
            if (periodMatch) {
                currentPeriod = periodMatch[1];
                const titleAndRole = content.replace(/\s*\([^)]+\)$/, '').trim();
                
                // 역할 분리 (괄호 안의 내용)
                const roleMatch = titleAndRole.match(/^(.+?)\s*\(([^)]+)\)$/);
                if (roleMatch) {
                    currentEtc = roleMatch[1].trim();
                    currentRole = roleMatch[2].trim();
                } else {
                    currentEtc = titleAndRole;
                    currentRole = '';
                }
            } else {
                currentEtc = content;
                currentPeriod = '';
                currentRole = '';
            }
            currentDetails = [];
        } else if (line.startsWith('- ')) {
            currentDetails.push(line.substring(2).trim());
        } else if (line.trim() && !line.startsWith('#') && currentEtc) {
            currentDetails.push(line.trim());
        }
    }

    // 마지막 항목 처리
    if (currentEtc) {
        html += `
            <div class="etc-item">
                <div class="etc-period">${currentPeriod}</div>
                <div class="etc-item-info">
                    <h3>${currentEtc}</h3>
                    ${currentRole ? `<div class="subtitle">${currentRole}</div>` : ''}
                    ${currentDetails.length > 0 ? `
                        <ul>
                            ${currentDetails.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        `;
    }

    etcContainer.innerHTML = html;
}

function renderContent(data) {
    console.log('Rendering content:', data); // 디버깅용

    const sectionMappings = {
        'about-me': ['about-me', 'aboutme']
    };

    // 일반 섹션 렌더링
    for (const [sectionId, possibleKeys] of Object.entries(sectionMappings)) {
        const element = document.getElementById(sectionId);
        if (element) {
            const contentElement = element.querySelector('.content');
            if (contentElement) {
                let content = '';
                for (const key of possibleKeys) {
                    if (data[key]) {
                        content = convertMarkdownToHTML(data[key]);
                        break;
                    }
                }
                contentElement.innerHTML = content || '<p>내용을 불러오는 중입니다...</p>';
            }
        }
    }

    // 특별 섹션 렌더링
    if (data['skills']) {
        console.log('Rendering skills:', data['skills']); // 디버깅용
        renderSkills(data['skills']);
    }
    if (data['experience']) {
        renderExperience(data['experience']);
    }
    if (data['projects']) {
        renderProjects(data['projects']);
    }
    if (data['education']) {
        renderEducation(data['education']);
    }
    if (data['etc']) {
        renderEtc(data['etc']);
    }
}

function renderErrorMessage(lang) {
    const errorMessages = {
        ko: '콘텐츠를 불러올 수 없습니다.',
        en: 'Failed to load content.',
        ja: 'コンテンツを読み込めませんでした。'
    };
    
    const message = errorMessages[lang] || errorMessages.ko;
    const sectionsToUpdate = ['about-me', 'skills', 'experience', 'projects', 'education', 'etc'];
    
    sectionsToUpdate.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            const contentElement = element.querySelector('.content');
            if (contentElement) {
                contentElement.innerHTML = `<p>${message}</p>`;
            }
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('portfolioLang', lang);
    loadContent(lang);
    
    // 언어 버튼 활성화 상태 업데이트
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`button[onclick="setLanguage('${lang}')"]`)?.classList.add('active');
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    initCursor();
    loadContent('ko');
});