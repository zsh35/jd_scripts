/*
此文件为Node.js专用。其他用户请忽略
 */
let CookieJDs = [
'pt_key=AAJgUXzmADAX9_q9-wh7AEOmPYEsq7Xavbatu4KwVlvALdAfxo33d1O2ZrTkEKYhKkm4qBOL0a0; pt_pin=30335729-763446;',
'pt_key=AAJgZxL7ADC2bTlx_9Qp_rkN5OWl95r6a6uEgJjBtDDIloscXTwBbRKIwhGINpJMEGad_jGmU4A; pt_pin=jd_4020c6ffa8304;',
'pt_key=AAJgapnbADDhDk_w7YLc3SIn6lVKfjA7pQTdv_siv2ak_Lwnlksq4_lJCwMGMYc3vnsfZ0X-ZjU; pt_pin=jd_760b6e893cc19;',
'pt_key=AAJgUX8KADDHhxqIaBlQGo57tMvM_1nNRjzK02Sdfuo7gIC8UJOMoft6rcpX6viqqdT2fDUOY1k; pt_pin=jd_5a18a06d61f23;',
'pt_key=AAJgZYNFADBp-aLeIJr_97EeP0F78IgEn7nSkDqRe0siSoZqegdERS00gYQchQDWZuChe8eSpAQ; pt_pin=jd_5763617407767;',
'pt_key=AAJgZYUlADD5r6Ev-Zqd_j_2IPZVG32lIYglDVdNPsMtuPFVtombhAOtVAgwJdH_C8l7dWOqvB4; pt_pin=jd_vrbCVTRTVXuJ;',
'pt_key=AAJgbSDOADBMrEFOf5pj23Qw_aVPIJmWF8gnT4SE1QZrtsNVs7hSZi7Q8lk2dHOFjG5HXc9Y_A8; pt_pin=18696160069_p;',
'pt_key=AAJgTC82ADDwjl9697IMRiA06V79pvjIeGISd-yNzREWn1LDRC9jt62g0MHUedWcPf4IgaUhEkQ; pt_pin=jd_61ace03af247c;'
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GIT_HUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for (let i = 0; i < CookieJDs.length; i++) {
  if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
