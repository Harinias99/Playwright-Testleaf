import {test} from "@playwright/test";

test('pvr booking',async({page})=>{
    await page.goto('https://www.pvrcinemas.com/')
    await page.locator('//span[@class="cities-placed"]/parent::span').click()
   // await page.locator('//li[@class="pointer"]/span').selectOption("salem")
    await page.getByText('Salem',{exact:true}).click()
    await page.waitForTimeout(4000)
    //click cinema
    await page.locator('.cinemas-inactive').click()
    await page.locator('//span[text()="Select Cinema"]').click()
    await page.waitForTimeout(4000)

    await page.locator('//span[text()="INOX Reliance Mall Salem"]').click()
    
    //await page.locator('//span[text()="Select Date"]').click()
    await page.locator('(//li[@class="p-dropdown-item"])[2]').click()
     
    await page.waitForLoadState('domcontentloaded')
    await page.locator('(//span[text()="RANABAALI"])[2]').click()
    //await page.getByText('RANABAALI',{exact:true}).click()
    await page.locator('//span[text()="11:10 PM"]').click()
   
    await page.getByRole('button',{name:'button'}).click()
     

    //await page.locator('//button[text()="Accept"]').click()
    await page.locator('// span[@id="CL.CLUB|O:2"]').click()

    

//await page.waitForTimeout(60000)

    
    
  




    
  

})