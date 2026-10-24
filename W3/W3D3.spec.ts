import {test,expect} from "@playwright/test";
test('assertion14oct',async({page})=>{
    await page.goto('https://leafground.com/checkbox.xhtml')
    const checkbox = page.locator('//div[@ class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]/ancestor::div[@id="j_idt87:j_idt89"]').click();
    

   //await page.locator(' //div[@ class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]/ancestor::div[@id="j_idt87:j_idt89"] ').click()
      
     
     await page.waitForTimeout(2000)
     
  


})

