"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31497],{623207:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-4445bd84","path":"/devices/067761A.html","title":"Legrand 067761A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067761A control via MQTT","description":"Integrate your Legrand 067761A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T17:06:22.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]}]}],"git":{"updatedTime":1714287909000},"filePathRelative":"devices/067761A.md"}')},48230:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var i=n(166252);const o=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),a=(0,i._)("h3",{id:"binding",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,i.Uk)(" Binding")],-1),r=(0,i._)("p",null,'As part of its configuration, the remote expects to have a "group" binding configured for each of its button. Otherwise, it will consider itself not fully configured and send unnecessary commands on the zigbee network resulting in noticeable delay when controlling your device(s). In a nutshell:',-1),d=(0,i._)("ul",null,[(0,i._)("li",null,"When using devices bindings directly in Zigbee2MQTT, create groups with your target devices for each button and bind related groups accordingly."),(0,i._)("li",null,"When using automations to control your devices (e.g. homeassistant), create a virtual group (empty) and bind it to the buttons. Beware that having both the coordinator and group bound to a remote's button will publish 2 MQTT messages")],-1),s={},l=(0,n(983744).Z)(s,[["render",function(e,t){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),o,a,r,d,(0,i.kq)(" Notes END: Do not edit below this line ")])}]])}}]);