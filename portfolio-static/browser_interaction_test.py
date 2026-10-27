from pathlib import Path
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
r=Path(__file__).resolve().parent;s=BeautifulSoup((r/'index.html').read_text(),'html.parser');[e.decompose() for e in s.select('script[src],link[rel="stylesheet"]')]
with sync_playwright() as p:
 b=p.chromium.launch(headless=True, executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 total=0;fail=0
 def check(name,condition):
  global total,fail
  total+=1;fail+=not condition;print(('PASS' if condition else 'FAIL'),name)
 for w,h in [(1440,900),(768,1024),(390,844)]:
  page=b.new_page(viewport={'width':w,'height':h});errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.set_content(str(s));page.add_style_tag(content=(r/'style.css').read_text());page.add_script_tag(content=(r/'script.js').read_text());page.wait_for_timeout(1600)
  check(f'{w} no page errors',not errors)
  check(f'{w} no horizontal overflow',not page.evaluate('document.documentElement.scrollWidth>window.innerWidth'))
  check(f'{w} three projects',page.locator('.project').count()==3)
  check(f'{w} personal four photos',page.locator('.personal-grid img').count()==4)
  page.locator('.project').first.click();check(f'{w} modal opens',page.locator('#caseDialog').evaluate('(e)=>e.open'))
  page.locator('#caseClose').click();check(f'{w} modal closes',not page.locator('#caseDialog').evaluate('(e)=>e.open'))
  page.locator('#workNext').click();check(f'{w} next button moves gallery',('translate3d(-' in page.locator('#workTrack').get_attribute('style') or page.locator('#workTrack').evaluate('(e)=>e.scrollWidth <= e.parentElement.clientWidth')))
  page.locator('#senderName').fill('Student');page.locator('#senderEmail').fill('invalid');page.locator('#senderMessage').fill('Testing');check(f'{w} email validation',not page.locator('#senderEmail').evaluate('(e)=>e.checkValidity()'))
  page.close()
 b.close();print('RESULT',total-fail,'/',total);raise SystemExit(bool(fail))