'''
2024 learn Selenium
'''
from selenium import webdriver

def test_smoke():
  '''
  SMK-1. Smoke test
  '''
  driver = webdriver.Chrome()
  driver.get("http://selenium.dev")
  # driver.quit()
  assert True, ""
  

