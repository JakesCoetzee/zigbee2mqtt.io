"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[65107],{84673:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-99148d86","path":"/devices/EFEKTA_PWS_MaxPro.html","title":"EFEKTA EFEKTA_PWS_MaxPro control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_PWS_MaxPro control via MQTT","description":"Integrate your EFEKTA EFEKTA_PWS_MaxPro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Soil moisture (numeric)","slug":"soil-moisture-numeric","link":"#soil-moisture-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Illuminance lux (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1714287909000},"filePathRelative":"devices/EFEKTA_PWS_MaxPro.md"}')},35199:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(166252);const a=(0,o._)("h1",{id:"efekta-efekta-pws-maxpro",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#efekta-efekta-pws-maxpro","aria-hidden":"true"},"#"),(0,o.Uk)(" EFEKTA EFEKTA_PWS_MaxPro")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"EFEKTA_PWS_MaxPro")],-1),u=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Plant watering sensor EFEKTA PWS Max Pro, long battery life")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"soil_moisture, battery, voltage, illuminance_lux, illuminance, temperature, humidity, linkquality")],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_PWS_MaxPro.png",alt:"EFEKTA EFEKTA_PWS_MaxPro"})])],-1),s=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h={href:"http://efektalab.com/PWS_MaxPro",target:"_blank",rel:"noopener noreferrer"},m=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.uE)('<ul><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric" aria-hidden="true">#</a> Soil moisture (numeric)</h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;soil_moisture&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance_lux&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),b={},f=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,o.up)("RouterLink"),b=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[l,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[u,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=EFEKTA"},{default:(0,o.w5)((()=>[(0,o.Uk)("EFEKTA")])),_:1})])]),r,c,d])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,(0,o._)("p",null,[(0,o._)("a",h,[(0,o.Uk)("Plant watering sensor EFEKTA PWS Max Pro, long battery life"),(0,o.Wm)(b)])]),(0,o.kq)(" Notes END: Do not edit below this line "),m,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);