const contentData = {};

async function loadContent(lang) {
    if (contentData[lang]) {
        renderContent(contentData[lang]);
        return;
    }

    try {
        // GitHub Pages에서 상대 경로 처리
        const baseUrl = window.location.pathname.endsWith('/') ? 
            window.location.pathname : 
            window.location.pathname + '/';
        
        const response = await fetch(`${baseUrl}portfolio_draft_${lang}.md`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        contentData[lang] = parseMarkdown(markdown);
        renderContent(contentData[lang]);
    } catch (error) {
        console.error(`Error loading content for ${lang}:`, error);
        // 에러 발생 시 기본 메시지 표시
        renderErrorMessage(lang);
    }
}

function parseMarkdown(markdown) {
    const sections = {};
    let currentSection = '';
    const lines = markdown.split('\n');

    for (const line of lines) {
        if (line.startsWith('## ')) {
            // 섹션 헤더에서 숫자와 점 제거 후 정규화
            const sectionTitle = line.substring(3).trim();
            const cleanTitle = sectionTitle.replace(/^\d+\.\s*/, ''); // "1. About Me" -> "About Me"
            currentSection = cleanTitle.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-가-힣]/g, '');
            sections[currentSection] = '';
        } else if (currentSection) {
            sections[currentSection] += line + '\n';
        }
    }

    // Convert markdown to HTML for each section
    for (const sectionKey in sections) {
        sections[sectionKey] = convertMarkdownToHTML(sections[sectionKey]);
    }
    return sections;
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
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.+)$/gm, '<p>$1</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p><h/g, '<h')
        .replace(/<\/h([1-6])><\/p>/g, '</h$1>');
    
    return html;
}

function renderContent(data) {
    const sectionMappings = {
        'about-me': ['about-me', 'aboutme', '자기소개'],
        'skills': ['skills', '기술스택', '기술-스택'],
        'experience': ['experience', '경력', '경험'],
        'projects': ['projects', '프로젝트'],
        'education': ['education', '교육', '학력'],
        'etc': ['etc', '기타', '추가정보']
    };

    for (const [sectionId, possibleKeys] of Object.entries(sectionMappings)) {
        const element = document.getElementById(sectionId);
        if (element) {
            const contentElement = element.querySelector('.content');
            if (contentElement) {
                let content = '';
                for (const key of possibleKeys) {
                    if (data[key]) {
                        content = data[key];
                        break;
                    }
                }
                contentElement.innerHTML = content || '<p>내용을 불러오는 중입니다...</p>';
            }
        }
    }
}

function renderErrorMessage(lang) {
    const errorMessages = {
        ko: '콘텐츠를 불러올 수 없습니다.',
        en: 'Failed to load content.',
        ja: 'コンテンツを読み込めませんでした。'
    };
    
    const message = errorMessages[lang] || errorMessages.ko;
    document.querySelectorAll('.content').forEach(el => {
        el.innerHTML = `<p>${message}</p>`;
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

// DOMContentLoaded 이벤트 사용
document.addEventListener('DOMContentLoaded', function() {
    // Load marked.js for Markdown to HTML conversion
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.onload = () => {
        const savedLang = localStorage.getItem('portfolioLang') || 'ko';
        loadContent(savedLang);
        setLanguage(savedLang); // 버튼 상태도 업데이트
    };
    script.onerror = () => {
        console.warn('marked.js failed to load, using fallback HTML conversion');
        const savedLang = localStorage.getItem('portfolioLang') || 'ko';
        loadContent(savedLang);
        setLanguage(savedLang); // 버튼 상태도 업데이트
    };
    document.head.appendChild(script);
});