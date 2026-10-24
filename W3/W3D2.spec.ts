import {test} from "@playwright/test";
test('Day4 home assignments',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager');
//await page.getByRole('textbox').fill('crmsfa');
   await page.getByLabel("Password").fill('crmsfa')
   //await page.waitForTimeout(2000)
      await page.locator('.decorativeSubmit').click()
   await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click()
      //click leads
     // await page.locator('a[id="ext-gen553"]').click()  //error
     await page.locator('//a[text()="Leads"]').click()
     
     await page.waitForTimeout(2000)
     await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
      //acc name
      
     await page.locator('//input[@id="createLeadForm_companyName"]').fill("testleaf")
     await page.locator('//input[@id="createLeadForm_firstName"]').fill("Harini")
     await page.locator('//input[@id="createLeadForm_companyName"]').fill("A S")
     await page.waitForTimeout(2000)
     await page.locator('//input[@id="createLeadForm_personalTitle"]').fill("Ms")
     await page.waitForTimeout(2000)
     await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill("practice")
     await page.waitForTimeout(2000)
     await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill("1000")
     await page.waitForTimeout(2000)
     await page.locator('//input[@id="createLeadForm_departmentName"]').fill("maths")
     await page.getByRole('button',{name: 'Create Lead'}).click()
     await page.waitForTimeout(2000)
   

     


})
// test('test', async ({ page }) => {
//   await page.goto('https://leaftaps.com/opentaps/control/main');

//   await page.getByRole('textbox', { name: 'Username' }).fill('Demosalesmanager');

//   await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link').first().click();
//   await page.goto('https://leaftaps.com/crmsfa/control/leadsMain');
//   await page.goto('https://leaftaps.com/crmsfa/control/createLeadForm');
// });