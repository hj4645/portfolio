// 마크다운 콘텐츠를 JavaScript 객체로 임베드
const markdownContent = {
    ko: `# 백엔드 개발자 포트폴리오 (초안 - 한국어)

## About Me

2년차 백엔드 개발자로, 현재 제조업 자동화(MES) 솔루션 기업에서 백엔드 개발을 중심으로 풀스택 개발 경험을 쌓고 있습니다. 현업에서는 하드웨어(설비) 데이터를 수집하여 대시보드에 그래프로 시각화하고, 제조업 종사자가 기존에 아날로그 방식으로 운영하던 부분을 자동화할 수 있도록 관리 시스템을 구축하는 업무를 수행하고 있습니다.

## Skills

### Backend
Kotlin, Java, Spring Boot, Python, Gradle, Spring Data JPA, JavaScript, Maven

### Databases
MySQL, Oracle, PostgreSQL, MongoDB, InfluxDB

### Infrastructure & DevOps
Redis, Nginx, AWS, Ubuntu (Linux), GitHub Actions, Docker

### Frontend
React, Vanilla JS

### Languages
영어 (간단한 회화), 일본어 (간단한 회화)

## Experience

### 제조업 자동화(MES) 솔루션 기업 | 2023.08 ~ 현재
- 하드웨어(설비) 데이터 수집 및 대시보드 시각화 시스템 구축
- 제조업 공정 자동화를 위한 관리 시스템 개발

## Projects

### Flutter(Dart) 기반 MES 프론트엔드 개발 | 2024.03 ~ 2024.06
- 제조업 현장 시스템 구현 경험

### Java(Spring Boot), JavaScript(Thymeleaf) 레거시 시스템 리팩토링 | 2023.10 ~ 2024.02
- 기존 시스템의 효율성 및 유지보수성 개선

### React + Kotlin(GraphQL) MES 제조업 설비 데이터 시각화 및 자재 관리 페이지 BE + FE 구현 | 2024.01 ~ 2024.05 | https://github.com/username/mes-project
- 설비 데이터 시각화 및 자재 관리 기능 개발

### O2O 플랫폼 백엔드 매장 영역 담당 및 인프라 영역 모니터링 구성 (사이드 프로젝트) | 2024.06 ~ 2024.12 | https://github.com/username/o2o-platform | https://demo.o2o-platform.com
- 멀티모듈 프로젝트 구조 구성 및 매장 영역 개발
- 분산 모니터링 시스템 구축 (OpenZipkin, OpenTelemetry, Grafana, Prometheus) 및 AWS 운영 서버와 로컬 DB 서버 메트릭 수집
- Redis 캐시 장애 대응을 위한 Circuit Breaker 구현 (Redis 조회 -> Circuit Breaker 발동 -> 로컬 캐시 조회 -> DB 조회 (AOP Fallback 메서드, DB 부하 제한))

### 분산 모니터링 시스템 구축 (현재 회사) | 2024.08 ~ 진행중 | https://github.com/username/monitoring-system
- OpenZipkin, OpenTelemetry, Grafana, Prometheus를 활용한 분산 모니터링 시스템 구축
- AWS 운영 서버 및 로컬 Ubuntu (Linux) MySQL 서버 메트릭 수집 (Prometheus Pull 방식, OpenTelemetry Push 방식)
- 비용 절감을 위해 로컬 Ubuntu 서버에 모니터링 서버 구축

## Education

### (디지털컨버전스)AWS 클라우드와 Elasticsearch를 활용한 Java(자바) Full-Stack 개발자 양성과정 (2023-01-26 ~ 2023-07-11)

## Etc

### 패스트캠퍼스 INNER CIRCLE 멘티 (BackEnd Developer / Sub-Leader) (2025-03-22 ~ 2025-06-25)
- 재직자 대상 개발자 성장 프로그램 참여
- 코드 리뷰 및 프로젝트 멘티 활동
- 지역 소상공인 상생을 위한 재고 상품 판매 O2O 서비스 기획 및 최우수 프로젝트 수상`,

    en: `# Backend Developer Portfolio (Draft - English)

## About Me

I am a 2nd-year backend developer currently gaining full-stack development experience with a focus on backend development at a manufacturing automation (MES) solution company. In my current role, I collect hardware (equipment) data and visualize it on dashboards with graphs, and build management systems to automate processes that manufacturing workers previously operated in analog ways.

## Skills

### Backend
Kotlin, Java, Spring Boot, Python, Gradle, Spring Data JPA, JavaScript, Maven

### Databases
MySQL, Oracle, PostgreSQL, MongoDB, InfluxDB

### Infrastructure & DevOps
Redis, Nginx, AWS, Ubuntu (Linux), GitHub Actions, Docker

### Frontend
React, Vanilla JS

### Languages
English (Basic Conversation), Japanese (Basic Conversation)

## Experience

### Manufacturing Automation (MES) Solution Company | Aug 2023 ~ Present
- Building hardware (equipment) data collection and dashboard visualization systems
- Developing management systems for manufacturing process automation

## Projects

### Flutter(Dart) based MES Frontend Development | Mar 2024 ~ Jun 2024
- Experience implementing manufacturing field systems

### Java(Spring Boot), JavaScript(Thymeleaf) Legacy System Refactoring | Oct 2023 ~ Feb 2024
- Improved efficiency and maintainability of existing systems

### React + Kotlin(GraphQL) MES Manufacturing Equipment Data Visualization and Material Management Page BE + FE Implementation | Jan 2024 ~ May 2024 | https://github.com/username/mes-project
- Developed equipment data visualization and material management features

### O2O Platform Backend Store Area Development and Infrastructure Monitoring Setup (Side Project) | Jun 2024 ~ Dec 2024 | https://github.com/username/o2o-platform | https://demo.o2o-platform.com
- Multi-module project structure configuration and store area development
- Distributed monitoring system setup (OpenZipkin, OpenTelemetry, Grafana, Prometheus) and AWS production server and local DB server metrics collection
- Circuit Breaker implementation for Redis cache failure handling (Redis query -> Circuit Breaker activation -> Local cache query -> DB query (AOP Fallback method, DB load limitation))

### Distributed Monitoring System Setup (Current Company) | Aug 2024 ~ Ongoing | https://github.com/username/monitoring-system
- Distributed monitoring system setup using OpenZipkin, OpenTelemetry, Grafana, Prometheus
- AWS production server and local Ubuntu (Linux) MySQL server metrics collection (Prometheus Pull method, OpenTelemetry Push method)
- Built monitoring server on local Ubuntu server for cost reduction

## Education

### (Digital Convergence) Java Full-Stack Developer Training Course utilizing AWS Cloud and Elasticsearch (2023-01-26 ~ 2023-07-11)

## Etc

### Fast Campus INNER CIRCLE Mentee (Backend Developer / Sub-Leader) (2025-03-22 ~ 2025-06-25)
- Participated in developer growth program for working professionals
- Code review and project mentoring activities
- Planned inventory product sales O2O service for local small business cooperation and won the best project award`,

    ja: `# バックエンド開発者ポートフォリオ（草案 - 日本語）

## About Me

2年目のバックエンド開発者として、現在製造業自動化（MES）ソリューション企業でバックエンド開発を中心にフルスタック開発経験を積んでいます。現業では、ハードウェア（設備）データを収集してダッシュボードにグラフで可視化し、製造業従事者が既存にアナログ方式で運営していた部分を自動化できるよう管理システムを構築する業務を行っています。

## Skills

### Backend
Kotlin, Java, Spring Boot, Python, Gradle, Spring Data JPA, JavaScript, Maven

### Databases
MySQL, Oracle, PostgreSQL, MongoDB, InfluxDB

### Infrastructure & DevOps
Redis, Nginx, AWS, Ubuntu (Linux), GitHub Actions, Docker

### Frontend
React, Vanilla JS

### Languages
英語（簡単な会話）、日本語（簡単な会話）

## Experience

### 製造業自動化（MES）ソリューション企業 | 2023年8月 ~ 現在
- ハードウェア（設備）データ収集およびダッシュボード可視化システム構築
- 製造業工程自動化のための管理システム開発

## Projects

### Flutter(Dart)ベースMESフロントエンド開発 | 2024年3月 ~ 2024年6月
- 製造業現場システム実装経験

### Java(Spring Boot)、JavaScript(Thymeleaf)レガシーシステムリファクタリング | 2023年10月 ~ 2024年2月
- 既存システムの効率性および保守性改善

### React + Kotlin(GraphQL) MES製造業設備データ可視化および資材管理ページBE + FE実装 | 2024年1月 ~ 2024年5月 | https://github.com/username/mes-project
- 設備データ可視化および資材管理機能開発

### O2Oプラットフォームバックエンド店舗領域担当およびインフラ領域モニタリング構成（サイドプロジェクト） | 2024年6月 ~ 2024年12月 | https://github.com/username/o2o-platform | https://demo.o2o-platform.com
- マルチモジュールプロジェクト構造構成および店舗領域開発
- 分散モニタリングシステム構築（OpenZipkin、OpenTelemetry、Grafana、Prometheus）およびAWS運営サーバーとローカルDBサーバーメトリクス収集
- Redisキャッシュ障害対応のためのCircuit Breaker実装（Redis照会 -> Circuit Breaker発動 -> ローカルキャッシュ照会 -> DB照会（AOP Fallbackメソッド、DB負荷制限））

### 分散モニタリングシステム構築（現在の会社） | 2024年8月 ~ 進行中 | https://github.com/username/monitoring-system
- OpenZipkin、OpenTelemetry、Grafana、Prometheusを活用した分散モニタリングシステム構築
- AWS運営サーバーおよびローカルUbuntu（Linux）MySQLサーバーメトリクス収集（Prometheus Pull方式、OpenTelemetry Push方式）
- コスト削減のためローカルUbuntuサーバーにモニタリングサーバー構築

## Education

### （デジタルコンバージェンス）AWSクラウドとElasticsearchを活用したJava（ジャバ）Full-Stack開発者養成課程（2023-01-26 ~ 2023-07-11）

## Etc

### ファストキャンパスINNER CIRCLEメンティ（BackEnd Developer / Sub-Leader）（2025-03-22 ~ 2025-06-25）
- 在職者対象開発者成長プログラム参加
- コードレビューおよびプロジェクトメンティ活動
- 地域小商工人共生のための在庫商品販売O2Oサービス企画および最優秀プロジェクト受賞`
};

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

function loadContent(lang) {
    if (contentData[lang]) {
        renderContent(contentData[lang]);
        return;
    }

    try {
        const markdown = markdownContent[lang] || markdownContent.ko;
        contentData[lang] = parseMarkdown(markdown);
        renderContent(contentData[lang]);
    } catch (error) {
        console.error(`Error loading content for ${lang}:`, error);
        renderErrorMessage(lang);
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