import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'styles.css').read_text(encoding='utf-8')

def check_lang():
    m = re.search(r'<html[^>]*>', HTML, flags=re.IGNORECASE)
    if not m:
        return 'HTML tag not found'
    tag = m.group(0)
    return 'lang present' if re.search(r'\blang\s*=\s*"[^"]+"', tag, flags=re.IGNORECASE) else 'lang MISSING'

def check_meta_viewport():
    return 'meta viewport present' if re.search(r'<meta[^>]+name=["\']viewport["\']', HTML, flags=re.IGNORECASE) or re.search(r'name=["\']viewport["\']', HTML, flags=re.IGNORECASE) else 'meta viewport MISSING'

def check_title():
    return 'title present' if re.search(r'<title>.+?</title>', HTML, flags=re.IGNORECASE|re.DOTALL) else 'title MISSING'

def imgs_without_alt():
    imgs = re.findall(r'<img\b[^>]*>', HTML, flags=re.IGNORECASE)
    noalt = [i for i in imgs if not re.search(r'\balt\s*=\s*"', i, flags=re.IGNORECASE)]
    return len(imgs), len(noalt)

def count_details():
    return HTML.count('<details'), HTML.count('<summary')

def anchor_links():
    links = re.findall(r'<a\b[^>]*href=["\']#([^"\']+)["\']', HTML, flags=re.IGNORECASE)
    return len(links)

def css_focus_visible():
    return 'found' if ':focus-visible' in CSS else 'not found'

def css_tokens():
    needed = ['--accent', '--text', '--border', '--space-05']
    found = {t: (t in CSS) for t in needed}
    return found

def run_all():
    print('Static check report for project root:', ROOT)
    print('1) <html> lang:', check_lang())
    print('2) meta viewport:', check_meta_viewport())
    print('3) <title> tag:', check_title())
    imgs_total, imgs_noalt = imgs_without_alt()
    print(f'4) img tags: {imgs_total} total, {imgs_noalt} without alt')
    d_count, s_count = count_details()
    print(f'5) details/summary occurrences: details={d_count}, summary={s_count}')
    print('6) internal anchor links (#):', anchor_links())
    print('7) CSS :focus-visible rule:', css_focus_visible())
    tokens = css_tokens()
    print('8) CSS tokens presence:')
    for k,v in tokens.items():
        print(f'   - {k}:', 'OK' if v else 'MISSING')

if __name__ == '__main__':
    run_all()
