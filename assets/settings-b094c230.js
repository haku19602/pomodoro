import{a3 as r}from"./index-d278d0f5.js";const a=r("settings",{state:()=>({alarms:[{id:1,name:"鬧鐘",file:new URL(""+new URL("alarm-47fbbbce.mp3",import.meta.url).href,self.location).href},{id:2,name:"Yay",file:new URL(""+new URL("yay-ca7f6c55.mp3",import.meta.url).href,self.location).href}],selectedAlarm:1,notify:!0}),getters:{selectedAlarmFile(){const e=this.alarms.findIndex(t=>t.id===this.selectedAlarm);return this.alarms[e].file}},persist:{key:"pomodoro-settings",paths:["selectedAlarm","notify"]}});export{a as u};
