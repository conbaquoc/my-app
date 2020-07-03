/*! For license information please see 8.2ccb59bf.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{400:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=(r=n(206))&&"object"===typeof r&&"default"in r?r.default:r;n(393);var o,a,s,c,u=n(28),p=n(149),f=n(208),l=n(207),g=((o={})["trace started"]="Trace {$traceName} was started before.",o["trace stopped"]="Trace {$traceName} is not running.",o["no window"]="Window is not available.",o["no app id"]="App id is not available.",o["no project id"]="Project id is not available.",o["no api key"]="Api key is not available.",o["invalid cc log"]="Attempted to queue invalid cc event",o["FB not default"]="Performance can only start when Firebase app instance is the default one.",o["RC response not ok"]="RC response is not ok",o["invalid attribute name"]="Attribute name {$attributeName} is invalid.",o["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",o["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",o["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",o),m=new p.ErrorFactory("performance","Performance",g),h=function(){function t(t){if(this.window=t,!t)throw m.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n];e(i)}})).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===a&&(a=new t(s)),a},t}();function d(t,e){var n=t.length-e.length;if(n<0||n>1)throw m.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}var v,_,b=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=d("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=d("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw m.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw m.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw m.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===c&&(c=new t),c},t}();function y(){return v}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(_||(_={}));var I=["firebase_","google_","ga_"],T=new RegExp("^[a-zA-Z]\\w*$");function E(){var t=h.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function A(){switch(h.getInstance().document.visibilityState){case"visible":return _.VISIBLE;case"hidden":return _.HIDDEN;default:return _.UNKNOWN}}function w(){var t=h.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}var S=new f.Logger("Performance");S.logLevel=f.LogLevel.INFO;var M=!0;function k(t){var e=function(){var t=h.getInstance().localStorage;if(!t)return;var e=t.getItem("@firebase/performance/configexpire");if(!e||(n=e,!(Number(n)>Date.now())))return;var n;var r=t.getItem("@firebase/performance/config");if(!r)return;try{return JSON.parse(r)}catch(o){return}}();return e?(N(e),Promise.resolve()):function(t){return function(){var t=b.getInstance().installationsService.getToken();return t.then((function(t){})),t}().then((function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+b.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+b.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:"FIREBASE_INSTALLATIONS_AUTH "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:b.getInstance().getAppId(),app_version:"0.3.8",sdk_version:"0.0.1"})});return fetch(r).then((function(t){if(t.ok)return t.json();throw m.create("RC response not ok")}))})).catch((function(){S.info("Could not fetch config, will use default configs")}))}(t).then(N).then((function(t){return function(t){var e=h.getInstance().localStorage;if(!t||!e)return;e.setItem("@firebase/performance/config",JSON.stringify(t)),e.setItem("@firebase/performance/configexpire",String(Date.now()+60*b.getInstance().configTimeToLive*60*1e3))}(t)}),(function(){}))}function N(t){if(!t)return t;var e=b.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=M,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=R(e.tracesSamplingRate),e.logNetworkAfterSampling=R(e.networkRequestsSamplingRate),t}function R(t){return Math.random()<=t}var O,U=1;function P(){return U=2,O=O||function(){var t=h.getInstance().document;return new Promise((function(e){t&&"complete"!==t.readyState?t.addEventListener("readystatechange",(function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())})):e()}))}().then((function(){return function(){var t=b.getInstance().installationsService.getId();return t.then((function(t){v=t})),t}()})).then((function(t){return k(t)})).then((function(){return F()}),(function(){return F()}))}function F(){U=3}var B,C=3,L=[],j=!1;function D(t){setTimeout((function(){if(0!==C)return L.length?void function(){var t=u.__spreadArrays(L);L=[];var e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}}));(function(t,e){return function(t){var e=b.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then((function(t){return t.ok||S.info("Call to Firebase backend failed."),t.json()})).then((function(t){var n=Number(t.nextRequestWaitMillis),r=1e4;isNaN(n)||(r=Math.max(n,r));var i=t.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(L=u.__spreadArrays(e,L),S.info("Retry transport request later.")),C=3,D(r)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:b.getInstance().logSource,log_event:e},t).catch((function(){L=u.__spreadArrays(t,L),C--,S.info("Tries left: "+C+"."),D(1e4)}))}():D(1e4)}),t)}function q(t){if(!t.eventTime||!t.message)throw m.create("invalid cc log");L=u.__spreadArrays(L,[t])}function W(t,e){B||(B=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(void 0,e);q({message:r,eventTime:Date.now()})}}(x)),B(t,e)}function K(t){var e=b.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&h.getInstance().requiredApisAvailable()&&(t.isAuto&&A()!==_.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===U?V(t):P().then((function(){return V(t)}),(function(){return V(t)}))))}function V(t){y()&&setTimeout((function(){return W(t,1)}),0)}function x(t,e){return 0===e?function(t){var e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:J(),network_request_metric:e};return JSON.stringify(n)}(t):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:J(),trace_metric:e};return JSON.stringify(r)}(t)}function J(){return{google_app_id:b.getInstance().getAppId(),app_instance_id:y(),web_app_info:{sdk_version:"0.3.8",page_url:h.getInstance().getUrl(),service_worker_status:E(),visibility_state:A(),effective_connection_type:w()},application_process_state:0}}var $=["_fp","_fcp","_fid"];var z=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=h.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||"FB-PERF-TRACE-MEASURE-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw m.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw m.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),K(this)},t.prototype.record=function(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=u.__assign({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}K(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e},t.prototype.putMetric=function(t,e){if(!function(t,e){return!(0===t.length||t.length>100)&&(e&&e.startsWith("_wt_")&&$.indexOf(t)>-1||!t.startsWith("_"))}(t,this.name))throw m.create("invalid custom metric name",{customMetricName:t});this.counters[t]=e},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n=function(t){return!(0===t.length||t.length>40)&&(!I.some((function(e){return t.startsWith(e)}))&&!!t.match(T))}(t),r=function(t){return 0!==t.length&&t.length<=100}(e);if(n&&r)this.customAttributes[t]=e;else{if(!n)throw m.create("invalid attribute name",{attributeName:t});if(!r)throw m.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return u.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=h.getInstance().getUrl();if(i){var o=new t("_wt_"+i,!0),a=Math.floor(1e3*h.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){var s=n.find((function(t){return"first-paint"===t.name}));s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime));var c=n.find((function(t){return"first-contentful-paint"===t.name}));c&&c.startTime&&o.putMetric("_fcp",Math.floor(1e3*c.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))}K(o)}},t.createUserTimingTrace=function(e){K(new t(e,!1,e))},t}();function H(t){var e=t;if(e&&void 0!==e.responseStart){var n=h.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=b.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return W(t,0)}),0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}function G(){y()&&(setTimeout((function(){return function(){var t=h.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){z.createOobTrace(e,n),r=void 0}),5e3);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),z.createOobTrace(e,n,t))}))}else z.createOobTrace(e,n)}()}),0),setTimeout((function(){return function(){for(var t=h.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){H(r[n])}t.setupObserver("resource",H)}()}),0),setTimeout((function(){return function(){for(var t=h.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){Q(r[n])}t.setupObserver("measure",Q)}()}),0))}function Q(t){var e=t.name;"FB-PERF-TRACE-MEASURE"!==e.substring(0,"FB-PERF-TRACE-MEASURE".length)&&z.createUserTimingTrace(e)}var X=function(){function t(t){this.app=t,h.getInstance().requiredApisAvailable()?(j||(D(5500),j=!0),P().then(G,G)):S.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}return t.prototype.trace=function(t){return new z(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return b.getInstance().instrumentationEnabled},set:function(t){b.getInstance().instrumentationEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return b.getInstance().dataCollectionEnabled},set:function(t){b.getInstance().dataCollectionEnabled=t},enumerable:!0,configurable:!0}),t}();function Y(t){var e=function(t,e){if("[DEFAULT]"!==t.name)throw m.create("FB not default");if("undefined"===typeof window)throw m.create("no window");return function(t){s=t}(window),b.getInstance().firebaseAppInstance=t,b.getInstance().installationsService=e,new X(t)};t.INTERNAL.registerComponent(new l.Component("performance",(function(t){var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();return e(n,r)}),"PUBLIC")),t.registerVersion("@firebase/performance","0.3.8")}Y(i),e.registerPerformance=Y},406:function(t,e,n){"use strict";n.r(e);n(400)}}]);
//# sourceMappingURL=8.2ccb59bf.chunk.js.map