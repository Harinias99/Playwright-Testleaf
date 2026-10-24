// import test from "@playwright/test";

// test('Learn playwright locators',async({page})=>{
//     await page.goto('https://login.salesforce.com/?locale=in')

// //     await page.getByAltText('Salesforce login').click()

// //     await page.getByText('Username',{exact:true}).fill('asharini99.a61f06f50139@agentforce.com')
// await page.locator('//li[@id="hint_00Dfj00000klXSf005fj00000QXQhV"]').click()

// //     await page.getByRole('button',{name:'Log In'}).click()
// //     await page.getByLabel('Password').fill('Myphnm@99')
// //     await page.getByRole('button',{name:'Log In'}).click()
//     await page.waitForTimeout(20000)
//     await page.waitForLoadState('domcontentloaded')

//     await page.getByTitle('App Launcher',{exact:true}).click()
//     await page.getByLabel('View All Applications',{exact:true}).click()
//     await page.getByPlaceholder('Search apps or items...',{exact:true}).fill('leads')

// //     //await page.getByTestId('filter-bubble-deals-collection-blockbuster-deals-exchange').click()


// })

import test from "@playwright/test";

test('Learn playwright locators',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')

    await page.getByAltText('Salesforce login').click()

    await page.getByText('Username',{exact:true}).fill('asharini99.a61f06f50139@agentforce.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password').fill('Myphnm@99')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(20000)
    await page.waitForLoadState('domcontentloaded')

    await page.getByTitle('App Launcher',{exact:true}).click()
    await page.getByLabel('View All Applications',{exact:true}).click()
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill('leads')

    //await page.getByTestId('filter-bubble-deals-collection-blockbuster-deals-exchange').click()


})