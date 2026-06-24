require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
console.log("bot is running") 
let welcome = `
<b>Welcome to Softcon Business Solutions!</b>
\n\nEstablished in 1996, Softcon Business Solutions has been delivering exceptional software solutions across various verticals. Today, we are proud to be recognized as the fastest-growing retail software company, and one of "The 10 Most Trusted Retail Solution Providers" in the industry.
\n<b>🔹 Our Offerings:</b>
<b>Domain Expertise:</b> With over 20 years of experience, we bring unmatched expertise to serve you better.\n
<b>Unique Business Solutions:</b> Explore our range of standard and customizable solutions tailored for all business levels and types.\n
<b>Value Creation:</b> Our solutions are designed to add value to your business and enhance customer satisfaction.\n
<b>Continuous Training:</b> We provide ongoing training to ensure you and your team master our software.\n
<b>365 Days Support (12x7):</b> Enjoy seamless support every day, including weekends and holidays.\n
<b>Implementation Oriented:</b> Our focus on swift and effective implementation helps your business grow faster.\n
Stay updated with regular insights from Softcon, as we tackle new business challenges, adopt the latest technology, and offer continuous support to streamline your operations.\n
<b>🌟 Let's transform your business with innovative solutions from Softcon Business Solutions!</b>
`;
let details = `
<b>Softcon Business Solutions</b>\n
<b>Address</b>
408, 4th Floor, Flying Color Premises Society Ltd,
Purushottam Kheraj Rd, near Mulund Checknaka,
Gavane Pada, Mulund West, Mumbai 400080,
Maharashtra, India\n
<b>Location</b>:
https://maps.app.goo.gl/HYsdtqojRghYv2Z57\n
<b>Opening hours</b>: 10 am - 7 pm\n
<b>Email</b>: 
info@softconindia.com
support@softconindia.com\n
<b>Phone Number</b>: 
+91 75064 45649
+91 88866 33213\n
<b>Whatsapp</b>: +91 86523 20120\n
<b>Website</b>: https://www.softconindia.com/
`;
let address = `
408, 4th Floor, Flying Color Premises Society Ltd,
Purushottam Kheraj Rd, near Mulund Checknaka,
Gavane Pada, Mulund West, Mumbai 400080,
`;
let hours = 0;
let minutes =0;
function updatetime(){
    let d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    if (hours >= 19|| hours < 10) {
        bot.on('text', (ctx) => ctx.reply("Thank you for reaching out. Our team will respond to your message as soon as possible. Please note that our office is currently closed."))
    }
}
setInterval(updatetime,1000)
bot.start((ctx) => ctx.reply(welcome, { parse_mode: "HTML" }));
bot.command('details',(ctx) => ctx.reply(details,{parse_mode:"HTML"}));
bot.command('location',(ctx) => ctx.replyWithHTML("https://maps.app.goo.gl/HYsdtqojRghYv2Z57"));
bot.command('hours',(ctx) => ctx.reply("Monday to Saturday: 10 am to 7 pm\nSunday: Closed",{parse_mode:"HTML"}));
bot.command('web',(ctx) => ctx.replyWithHTML("https://www.softconindia.com/"))
bot.command('address',(ctx) => ctx.reply(address))
bot.command('contact',(ctx) => {
    ctx.replyWithContact("+91 75064 45649","Softcon Business Solution");
    ctx.replyWithContact("+91 88866 33213","Softcon Business Solution");
})
bot.command('whatsapp',(ctx) => ctx.replyWithContact("+91 86523 20120"))
bot.command('email',(ctx) => ctx.reply("info@softconindia.com\nsupport@softconindia.com"))
bot.command('link',(ctx) => ctx.replyWithHTML("https://t.me/SoftconBusinessSolution_bot"))

bot.hears(/details/i, (ctx) => ctx.reply(details, { parse_mode: "HTML" }));
bot.hears(/location/i, (ctx) => ctx.replyWithHTML("https://maps.app.goo.gl/HYsdtqojRghYv2Z57"));
bot.hears(/hours/i, (ctx) => ctx.reply("Monday to Saturday: 10 am to 7 pm\nSunday: Closed", { parse_mode: "HTML" }));
bot.hears(/web/i, (ctx) => ctx.replyWithHTML("https://www.softconindia.com/"));
bot.hears(/address/i, (ctx) => ctx.reply(address));
bot.hears(/contact/i, (ctx) => {
    ctx.replyWithContact("+91 75064 45649", "Softcon Business Solution");
    ctx.replyWithContact("+91 88866 33213", "Softcon Business Solution");
});
bot.hears(/whatsapp/i, (ctx) => ctx.replyWithContact("+91 86523 20120"));
bot.hears(/email/i, (ctx) => ctx.reply("info@softconindia.com\nsupport@softconindia.com"));
bot.hears(/link/i, (ctx) => ctx.replyWithHTML("https://t.me/SoftconBusinessSolution_bot"));
bot.launch();