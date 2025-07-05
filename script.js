const contentData = {};

async function loadContent(lang) {
    if (contentData[lang]) {
        renderContent(contentData[lang]);
        return;
    }

    try {
        const response = await fetch(`portfolio_draft_${lang}.md`);
        const markdown = await response.text();
        contentData[lang] = parseMarkdown(markdown);
        renderContent(contentData[lang]);
    } catch (error) {
        console.error(`Error loading content for ${lang}:`, error);
    }
}

function parseMarkdown(markdown) {
    const sections = {};
    let currentSection = '';
    const lines = markdown.split('\n');

    for (const line of lines) {
        if (line.startsWith('## ')) {
            currentSection = line.substring(3).trim().toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
            sections[currentSection] = '';
        } else if (currentSection) {
            sections[currentSection] += line + '\n';
        }
    }

    // Convert markdown to HTML for each section
    for (const sectionKey in sections) {
        sections[sectionKey] = marked.parse(sections[sectionKey]);
    }
    return sections;
}

function renderContent(data) {
    document.getElementById('about-me').querySelector('.content').innerHTML = data['about-me'] || '';
    document.getElementById('skills').querySelector('.content').innerHTML = data['skills'] || '';
    document.getElementById('experience').querySelector('.content').innerHTML = data['experience'] || '';
    document.getElementById('projects').querySelector('.content').innerHTML = data['projects'] || '';
    document.getElementById('education').querySelector('.content').innerHTML = data['education'] || '';
    document.getElementById('etc').querySelector('.content').innerHTML = data['etc'] || '';
    document.getElementById('tech-verification').querySelector('.content').innerHTML = data['technical-stack-verification-and-enhancement'] || data['기술-스택-검증-및-보완'] || '';
}

function setLanguage(lang) {
    localStorage.setItem('portfolioLang', lang);
    loadContent(lang);
}

// Load marked.js for Markdown to HTML conversion
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
script.onload = () => {
    const savedLang = localStorage.getItem('portfolioLang') || 'ko';
    loadContent(savedLang);
};
document.head.appendChild(script);