"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8712],{781860:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o=JSON.parse('{"key":"v-5d588a76","path":"/guide/faq/","title":"FAQ","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":0},"excerpt":"","headers":[{"level":2,"title":"My network is unstable and/or performs poorly, what can I do?","slug":"my-network-is-unstable-and-or-performs-poorly-what-can-i-do","link":"#my-network-is-unstable-and-or-performs-poorly-what-can-i-do","children":[]},{"level":2,"title":"Why does my device not or fail to pair?","slug":"why-does-my-device-not-or-fail-to-pair","link":"#why-does-my-device-not-or-fail-to-pair","children":[{"level":3,"title":"No logging is shown at all","slug":"no-logging-is-shown-at-all","link":"#no-logging-is-shown-at-all","children":[]},{"level":3,"title":"Interview fails","slug":"interview-fails","link":"#interview-fails","children":[]}]},{"level":2,"title":"How do I migrate from one adapter to another?","slug":"how-do-i-migrate-from-one-adapter-to-another","link":"#how-do-i-migrate-from-one-adapter-to-another","children":[]},{"level":2,"title":"How do I move my Zigbee2MQTT instance to a different environment?","slug":"how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment","link":"#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment","children":[]},{"level":2,"title":"What does and does not require repairing of all devices?","slug":"what-does-and-does-not-require-repairing-of-all-devices","link":"#what-does-and-does-not-require-repairing-of-all-devices","children":[{"level":3,"title":"Requires repairing","slug":"requires-repairing","link":"#requires-repairing","children":[]},{"level":3,"title":"Doesn\'t require repairing","slug":"doesn-t-require-repairing","link":"#doesn-t-require-repairing","children":[]}]},{"level":2,"title":"Why are some links missing from my networkmap?","slug":"why-are-some-links-missing-from-my-networkmap","link":"#why-are-some-links-missing-from-my-networkmap","children":[]},{"level":2,"title":"Why is the action property always empty?","slug":"why-is-the-action-property-always-empty","link":"#why-is-the-action-property-always-empty","children":[]},{"level":2,"title":"I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?","slug":"i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true","link":"#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Common error codes","slug":"common-error-codes","link":"#common-error-codes","children":[]},{"level":2,"title":"How do I run multiple instances of Zigbee2MQTT?","slug":"how-do-i-run-multiple-instances-of-zigbee2mqtt","link":"#how-do-i-run-multiple-instances-of-zigbee2mqtt","children":[]},{"level":2,"title":"Zigbee2MQTT crashes after some time","slug":"zigbee2mqtt-crashes-after-some-time","link":"#zigbee2mqtt-crashes-after-some-time","children":[]}],"git":{"updatedTime":1714287909000},"filePathRelative":"guide/faq/README.md"}')},416926:(e,i,t)=>{t.r(i),t.d(i,{default:()=>ie});var o=t(166252);const a=(0,o._)("h1",{id:"faq",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),(0,o.Uk)(" FAQ")],-1),r={class:"table-of-contents"},n=(0,o._)("h2",{id:"my-network-is-unstable-and-or-performs-poorly-what-can-i-do",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#my-network-is-unstable-and-or-performs-poorly-what-can-i-do","aria-hidden":"true"},"#"),(0,o.Uk)(" My network is unstable and/or performs poorly, what can I do?")],-1),l=(0,o._)("li",null,"Try to restart the Zigbee device with poor/unstable connection. The route could be lost because of moving the coordinator to an other place at home.",-1),s=(0,o._)("h2",{id:"why-does-my-device-not-or-fail-to-pair",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#why-does-my-device-not-or-fail-to-pair","aria-hidden":"true"},"#"),(0,o.Uk)(" Why does my device not or fail to pair?")],-1),d=(0,o._)("p",null,"This problem can be divided in 2 categories; no logging is shown at all OR interview fails.",-1),h=(0,o._)("h3",{id:"no-logging-is-shown-at-all",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#no-logging-is-shown-at-all","aria-hidden":"true"},"#"),(0,o.Uk)(" No logging is shown at all")],-1),u=(0,o._)("li",null,"There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 3 and 4.",-1),c=(0,o._)("li",null,"If you are using a Raspberry Pi, try disconnecting any other USB devices. If after that pairing works, try connecting the USB devices via a powered USB hub.",-1),m=(0,o._)("li",null,"Make sure that any other Zigbee networks/hubs are powered down. When you e.g. want to pair an IKEA bulb which was first paired to the IKEA gateway make sure to power down the IKEA gateway. If that doesn't help also try powering down all devices that are connected to the IKEA hub.",-1),g=(0,o._)("li",null,"If it's a battery powered device, try replacing the battery.",-1),p=(0,o._)("li",null,"You've hit the device limit of the coordinator, especially occurs when using the CC2531 or CC2530 in combination with the source routing firmware. Try reflashing the coordinator and immediately pair the device after starting Zigbee2MQTT.",-1),f=(0,o._)("li",null,"Try pairing the device closer to the coordinator.",-1),w=(0,o._)("li",null,[(0,o.Uk)("CC2531/CC2530 coordinator only: "),(0,o._)("ul",null,[(0,o._)("li",null,"Stop Zigbee2MQTT, unplug the coordinator, wait 10 seconds, plug the coordinator, start Zigbee2MQTT and try to pair the device again."),(0,o._)("li",null,"If none of the above helps, try to reflash the coordinator (does not require re-pairing of already paired devices).")])],-1),b=(0,o._)("h3",{id:"interview-fails",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#interview-fails","aria-hidden":"true"},"#"),(0,o.Uk)(" Interview fails")],-1),y=(0,o._)("li",null,"Try pairing the device closer to the coordinator.",-1),k=(0,o._)("li",null,"There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 4.",-1),_=(0,o._)("li",null,"If it’s a battery powered device, try replacing the battery. Try to keep the device awake by pressing the button of the device (if any) every 3 seconds.",-1),v=(0,o._)("li",null,"Try re-pairing the device again for 2 or 3 times.",-1),U={href:"https://github.com/Koenkk/zigbee2mqtt/issues/new",target:"_blank",rel:"noopener noreferrer"},C=(0,o._)("code",null,"0x000000000000000",-1),T=(0,o._)("code",null,"ieeeAddress",-1),q=(0,o._)("code",null,"Starting interview of '0x0000000000000000'",-1),W={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2761",target:"_blank",rel:"noopener noreferrer"},I=(0,o._)("li",null,"Try pairing close to a bulb (light) router instead of the coordinator.",-1),x=(0,o._)("h2",{id:"how-do-i-migrate-from-one-adapter-to-another",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#how-do-i-migrate-from-one-adapter-to-another","aria-hidden":"true"},"#"),(0,o.Uk)(" How do I migrate from one adapter to another?")],-1),M=(0,o._)("p",null,"Want to migrate from e.g. a CC2530/CC2531 to a more powerful adapter (e.g. CC2652/CC1352)? Then follow these instructions below:",-1),Z=(0,o._)("div",{class:"custom-container warning"},[(0,o._)("p",{class:"custom-container-title"},"WARNING"),(0,o._)("p",null,[(0,o.Uk)("Migration from one adapter to another requires backup and restore support which is so far only implemented for the Zstack adapter (Texas Instruments adapters). Backup and restore is "),(0,o._)("strong",null,"not supported"),(0,o.Uk)(" for any other adapters (ConBee/Raspbee, EZSP and Zigate).")])],-1),S=(0,o._)("li",null,"First make sure you are running the latest version of Zigbee2MQTT",-1),z=(0,o._)("li",null,"Stop Zigbee2MQTT",-1),Q=(0,o._)("a",{href:"#what-does-and-does-not-require-repairing-of-all-devices"},"requires re-pairing of your devices",-1),R=(0,o._)("li",null,[(0,o.Uk)("If re-pairing is required: remove "),(0,o._)("code",null,"data/coordinator_backup.json"),(0,o.Uk)(" (if it exists) and "),(0,o._)("code",null,"data/database.db")],-1),E=(0,o._)("strong",null,"not",-1),A=(0,o._)("li",null,[(0,o.Uk)("Update the "),(0,o._)("code",null,"serial"),(0,o.Uk)(" -> "),(0,o._)("code",null,"port"),(0,o.Uk)(" in your "),(0,o._)("code",null,"configuration.yaml")],-1),D=(0,o._)("li",null,"Start Zigbee2MQTT",-1),N=(0,o.uE)('<ul><li>If re-pairing was required: <ol><li>Disconnect power of all mains powered devices</li><li>Start re-pairing devices 1 by 1</li></ol></li><li>If re-pairing was <strong>not</strong> required and your devices do not respond; restart some routers by removing them from the mains power for a few seconds.</li></ul><h2 id="how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment" tabindex="-1"><a class="header-anchor" href="#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment" aria-hidden="true">#</a> How do I move my Zigbee2MQTT instance to a different environment?</h2><p>Details about your network are stored in both the coordinator and files under the <code>data/</code> directory. To move your instance to another environment move the contents of the <code>data</code> directory and update the path to your coordinator in your <code>configuration.yaml</code>. Now you can start Zigbee2MQTT.</p><h2 id="what-does-and-does-not-require-repairing-of-all-devices" tabindex="-1"><a class="header-anchor" href="#what-does-and-does-not-require-repairing-of-all-devices" aria-hidden="true">#</a> What does and does not require repairing of all devices?</h2><h3 id="requires-repairing" tabindex="-1"><a class="header-anchor" href="#requires-repairing" aria-hidden="true">#</a> Requires repairing</h3><p>You need to re-pair all you devices when:</p><ul><li>Changing the network key (<code>network_key</code>), Zigbee channel (<code>channel</code>) or panID (<code>pan_id</code>) in <code>configuration.yaml</code>.</li><li>Switching between adapters requires repairing, <strong>except when</strong>: <ul><li>When adapters are the same repairing is <strong>not</strong> required (e.g. CC2531 -&gt; CC2531)</li><li>Switching from a CC2530 or CC2531 based adapter to a CC2538/CC2652/CC1352 based adapter does <strong>not</strong> require repairing (e.g. CC2531 -&gt; CC2652)</li><li>Switching between CC2538, CC2652 and CC1352 based adapters does <strong>not</strong> require repairing (e.g. CC2538 -&gt; CC2652)</li></ul></li></ul><h3 id="doesn-t-require-repairing" tabindex="-1"><a class="header-anchor" href="#doesn-t-require-repairing" aria-hidden="true">#</a> Doesn&#39;t require repairing</h3><p>You <strong>don&#39;t</strong> need to re-pair your devices when:</p><ul><li>Updating or downgrading Zigbee2MQTT to a different version.</li><li>Updating the coordinator firmware. <ul><li>If after flashing you fail to control your devices it helps to: <ul><li>Wait a few minutes so that the Zigbee network can settle.</li><li>Send Zigbee commands (e.g. turn on/off) to the device.</li><li>Reboot the device (unplug and plug power).</li></ul></li></ul></li><li>Switching the system running Zigbee2MQTT. <ul><li>When doing this, make sure to copy over the contents of the <code>data</code> directory.</li></ul></li></ul><h2 id="why-are-some-links-missing-from-my-networkmap" tabindex="-1"><a class="header-anchor" href="#why-are-some-links-missing-from-my-networkmap" aria-hidden="true">#</a> Why are some links missing from my networkmap?</h2><p>No worry, in case it happens with end devices (battery powered) it most of the times <strong>does not</strong> mean the devices aren&#39;t connected to the network map anymore. Some end devices (e.g. Xiaomi door sensor) sleep for a too long time which causes the parent (router child ageing) to remove it from it from its child table. This is what causes the missing link. Even while its not in the child table anymore, the end device can still communicate via the router. This does not always happen since not all routers use child ageing (this is a Zigbee 3.0 feature).</p><h2 id="why-is-the-action-property-always-empty" tabindex="-1"><a class="header-anchor" href="#why-is-the-action-property-always-empty" aria-hidden="true">#</a> Why is the <code>action</code> property always empty?</h2><p>When the Home Assistant integration is enabled (<code>homeassistant: true</code> in your <code>configuration.yaml</code>) the <code>action</code> property of your e.g. buttons will almost always be empty. Whenever an <code>action</code> is published e.g. <code>{&quot;action&quot;: &quot;single&quot;}</code> it will be immediately followed up by a <code>{&quot;action&quot;: &quot;&quot;}</code>. This is to trigger a state change in the Home Assistant action sensor (so that it can be used in e.g. automations).</p><h2 id="i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true" tabindex="-1"><a class="header-anchor" href="#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true" aria-hidden="true">#</a> I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?</h2>',15),B=(0,o._)("strong",null,"directly",-1),H=(0,o.uE)('<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>When using the default Zigbee2MQTT CC2531 coordinator firmware + 2 CC2531 routers your device limit will be:</p><ul><li>Coordinator: 15 - 2 routers = 13</li><li>Router 1: 21</li><li>Router 2: 21</li><li><strong>Device limit of 55 devices</strong></li></ul><h2 id="common-error-codes" tabindex="-1"><a class="header-anchor" href="#common-error-codes" aria-hidden="true">#</a> Common error codes</h2><p>A list of common error codes and what to do in case of them:</p>',5),L=(0,o._)("code",null,"MAC_CHANNEL_ACCESS_FAILURE",-1),P=(0,o._)("code",null,"NWK_TABLE_FULL",-1),F={href:"https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560",target:"_blank",rel:"noopener noreferrer"},K=(0,o._)("code",null,"MAC_CHANNEL_ACCESS_FAILURE",-1),O=(0,o._)("h2",{id:"how-do-i-run-multiple-instances-of-zigbee2mqtt",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#how-do-i-run-multiple-instances-of-zigbee2mqtt","aria-hidden":"true"},"#"),(0,o.Uk)(" How do I run multiple instances of Zigbee2MQTT?")],-1),j=(0,o._)("code",null,"base_topic",-1),X=(0,o._)("code",null,"channel",-1),Y=(0,o._)("code",null,"configuration.yaml",-1),G=(0,o._)("h2",{id:"zigbee2mqtt-crashes-after-some-time",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#zigbee2mqtt-crashes-after-some-time","aria-hidden":"true"},"#"),(0,o.Uk)(" Zigbee2MQTT crashes after some time")],-1),J=(0,o._)("p",null,[(0,o.Uk)("If after some uptime Zigbee2MQTT crashes with errors like: "),(0,o._)("code",null,"SRSP - AF - dataRequest after 6000ms"),(0,o.Uk)(" or "),(0,o._)("code",null,"SRSP - ZDO - mgmtPermitJoinReq after 6000ms"),(0,o.Uk)(" it means the adapter has crashed.")],-1),V=(0,o._)("li",null,"Normally this can be fixed by replugging the adapter and restarting Zigbee2MQTT",-1),$=(0,o.uE)('<li>If using a Raspberry Pi; this problem can occur if you are using a bad power supply or when other USB devices are connected directly to the Pi (especially occurs with external SSD), try connecting other USB devices through a powered USB hub.</li><li>Disable the USB autosuspend feature, if <code>cat /sys/module/usbcore/parameters/autosuspend</code> returns <code>1</code> or <code>2</code> it is enabled; to disable execute:<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/GRUB_CMDLINE_LINUX_DEFAULT=&quot;/&amp;usbcore.autosuspend=-1 /&#39;</span> /etc/default/grub\n<span class="token function">update-grub</span>\nsystemctl <span class="token function">reboot</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>On a Raspberry Pi, you will need to instead edit <code>/boot/cmdline.txt</code> and add <code>usbcore.autosuspend=-1</code> to the end of the line.</li></ul></li>',2),ee={},ie=(0,t(983744).Z)(ee,[["render",function(e,i){const t=(0,o.up)("router-link"),ee=(0,o.up)("RouterLink"),ie=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[a,(0,o._)("nav",r,[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(t,{to:"#my-network-is-unstable-and-or-performs-poorly-what-can-i-do"},{default:(0,o.w5)((()=>[(0,o.Uk)("My network is unstable and/or performs poorly, what can I do?")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#why-does-my-device-not-or-fail-to-pair"},{default:(0,o.w5)((()=>[(0,o.Uk)("Why does my device not or fail to pair?")])),_:1}),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(t,{to:"#no-logging-is-shown-at-all"},{default:(0,o.w5)((()=>[(0,o.Uk)("No logging is shown at all")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#interview-fails"},{default:(0,o.w5)((()=>[(0,o.Uk)("Interview fails")])),_:1})])])]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#how-do-i-migrate-from-one-adapter-to-another"},{default:(0,o.w5)((()=>[(0,o.Uk)("How do I migrate from one adapter to another?")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment"},{default:(0,o.w5)((()=>[(0,o.Uk)("How do I move my Zigbee2MQTT instance to a different environment?")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,o.w5)((()=>[(0,o.Uk)("What does and does not require repairing of all devices?")])),_:1}),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(t,{to:"#requires-repairing"},{default:(0,o.w5)((()=>[(0,o.Uk)("Requires repairing")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#doesn-t-require-repairing"},{default:(0,o.w5)((()=>[(0,o.Uk)("Doesn't require repairing")])),_:1})])])]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#why-are-some-links-missing-from-my-networkmap"},{default:(0,o.w5)((()=>[(0,o.Uk)("Why are some links missing from my networkmap?")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#why-is-the-action-property-always-empty"},{default:(0,o.w5)((()=>[(0,o.Uk)("Why is the action property always empty?")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true"},{default:(0,o.w5)((()=>[(0,o.Uk)("I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?")])),_:1}),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(t,{to:"#example"},{default:(0,o.w5)((()=>[(0,o.Uk)("Example")])),_:1})])])]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#common-error-codes"},{default:(0,o.w5)((()=>[(0,o.Uk)("Common error codes")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#how-do-i-run-multiple-instances-of-zigbee2mqtt"},{default:(0,o.w5)((()=>[(0,o.Uk)("How do I run multiple instances of Zigbee2MQTT?")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"#zigbee2mqtt-crashes-after-some-time"},{default:(0,o.w5)((()=>[(0,o.Uk)("Zigbee2MQTT crashes after some time")])),_:1})])])]),n,(0,o._)("ul",null,[l,(0,o._)("li",null,[(0,o.Uk)("Read "),(0,o.Wm)(ee,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Improve network range and stability")])),_:1})])]),s,d,h,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("Make sure "),(0,o.Wm)(ee,{to:"/guide/usage/pairing_devices.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("joining is enabled")])),_:1}),(0,o.Uk)(".")]),u,(0,o._)("li",null,[(0,o.Uk)("If you are using a Texas Instruments CC2652 or CC1352 based adapter, routers might be missing from the coordinator memory. Do a "),(0,o.Wm)(ee,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-coordinator-check"},{default:(0,o.w5)((()=>[(0,o.Uk)("coordinator check")])),_:1}),(0,o.Uk)(" and re-pair the missing routers.")]),c,m,g,p,f,w]),b,(0,o._)("ul",null,[y,k,_,v,(0,o._)("li",null,[(0,o.Uk)("This might be a Zigbee2MQTT bug, "),(0,o._)("a",U,[(0,o.Uk)("Create a new issue"),(0,o.Wm)(ie)]),(0,o.Uk)(" with the zigbee-herdsman debug logging attached to it. "),(0,o.Wm)(ee,{to:"/guide/usage/debug.html#zigbee-herdsman-debug-logging"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to enable zigbee-herdsman debug logging")])),_:1}),(0,o.Uk)(".")]),(0,o._)("li",null,[(0,o.Uk)("If device joins with "),C,(0,o.Uk)(" as "),T,(0,o.Uk)(" (you will see: "),q,(0,o.Uk)(" in the Zigbee2MQTT log) your CC253X might be broken. "),(0,o._)("a",W,[(0,o.Uk)("See issue #2761"),(0,o.Wm)(ie)]),(0,o.Uk)(".")]),(0,o._)("li",null,[(0,o.Uk)("In case the device is a bulb, try resetting it through "),(0,o.Wm)(ee,{to:"/guide/usage/touchlink.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Touchlink")])),_:1})]),I]),x,M,Z,(0,o._)("ol",null,[S,z,(0,o._)("li",null,[(0,o.Uk)("Determine whether migrating "),Q,(0,o._)("ul",null,[R,(0,o._)("li",null,[(0,o.Uk)("If re-pairing is "),E,(0,o.Uk)(" required: "),(0,o.Wm)(ee,{to:"/guide/adapters/flashing/copy_ieeaddr.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("copy the ieee address of the old adapter into the new one")])),_:1})])])]),A,D]),N,(0,o._)("p",null,[(0,o.Uk)("Definitely not! Example given: the default Zigbee2MQTT CC2531 firmware indeed supports 20 devices connected "),B,(0,o.Uk)(" to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another "),(0,o.Wm)(ee,{to:"/advanced/zigbee/05_create_a_cc2530_router.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("CC2530/CC2531 as a router")])),_:1}),(0,o.Uk)(" (which has a limit of 21 devices).")]),H,(0,o._)("ul",null,[(0,o._)("li",null,[L,(0,o.Uk)(": this happens when the wireless spectrum is too occupied. Mostly happens when a microwave is on or when there are WiFi networks on the same channel. See "),(0,o.Wm)(ee,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wifi-interference-by-changing-the-zigbee-channel"},{default:(0,o.w5)((()=>[(0,o.Uk)("Reduce Wifi interference by changing the Zigbee channel")])),_:1}),(0,o.Uk)(" how to fix this.")]),(0,o._)("li",null,[P,(0,o.Uk)(": "),(0,o._)("a",F,[(0,o.Uk)("reported"),(0,o.Wm)(ie)]),(0,o.Uk)(" to have same root cause as the above "),K])]),O,(0,o._)("p",null,[(0,o.Uk)("In case you setup multiple instances of Zigbee2MQTT it's important to use a different "),j,(0,o.Uk)(" and "),X,(0,o.Uk)(". This can be configured in the "),(0,o.Wm)(ee,{to:"/guide/configuration/"},{default:(0,o.w5)((()=>[Y])),_:1}),(0,o.Uk)(".")]),G,J,(0,o._)("ul",null,[V,(0,o._)("li",null,[(0,o.Uk)("If you are using a CC2530 or CC2531 adapter consider upgrading to one of the "),(0,o.Wm)(ee,{to:"/guide/adapters/"},{default:(0,o.w5)((()=>[(0,o.Uk)("recommended adapters")])),_:1}),(0,o.Uk)(". The CC2530/CC2531 is considered legacy hardware and runs into memory corruption easily.")]),(0,o._)("li",null,[(0,o.Uk)("Make sure you are using the latest firmware on your adapter, see the "),(0,o.Wm)(ee,{to:"/guide/adapters/"},{default:(0,o.w5)((()=>[(0,o.Uk)("adapter page")])),_:1}),(0,o.Uk)(" for a link to the latest firmware.")]),$])])}]])}}]);