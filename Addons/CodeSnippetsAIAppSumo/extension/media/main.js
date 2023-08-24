// @ts-nocheck
(function () {
    const vscode = acquireVsCodeApi();

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, _lang) {
            return hljs.highlightAuto(code).value;
        },
        langPrefix: 'hljs language-',
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false
    });

    const aiSvg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17.000000pt" height="17.000000pt"
    viewBox="0 0 984.7 984.5" xml:space="preserve">
<style type="text/css">
   .st0{fill:#A451F6;}
   .st1{fill:#A04DF6;}
   .st2{fill:#9D4AF5;}
   .st3{fill:#FFFFFF;}
   .st4{fill:#9946F5;}
   .st5{fill:#9340F4;}
   .st6{fill:#9441F4;}
   .st7{fill:#9442F4;}
   .st8{fill:#913EF4;}
   .st9{fill:#903DF4;}
   .st10{fill:#8E3BF3;}
   .st11{fill:#8D3AF3;}
   .st12{fill:#8B38F3;}
   .st13{fill:#8A37F3;}
   .st14{fill:#8734F2;}
   .st15{fill:#8633F2;}
   .st16{fill:#8431F2;}
   .st17{fill:#822FF2;}
   .st18{fill:#7F2CF1;}
   .st19{fill:#7B28F1;}
   .st20{fill:#7623F0;}
   .st21{fill:#711EEF;}
</style>
<path id="p1_00000175283354010341859620000012988591541579042726_" class="st0" d="M651.9,26.4c42.6,14.6,83.2,35.1,120.2,60.7
   c-8.5,0.7-17,0.4-25.5,0.4c-172.7,0-345.3,0-518,0c-5.5,0.1-10.9-0.1-16.4-0.3c51.2-35.6,109.3-61.2,170.1-75
   C471.3-7.9,565.7-3.2,651.9,26.4z"/>
<path id="p2_00000058569803198109309770000017215064982446812049_" class="st1" d="M212.3,87.3c5.5,0.2,10.9,0.4,16.4,0.3
   c172.7,0,345.3,0,518,0c8.5-0.1,17,0.3,25.5-0.4c29.4,20.4,56.6,43.9,80.9,70.1c-6.1,0.3-12.3,0.3-18.4,0.3c-229,0-458,0-687,0
   c-5.4,0.1-10.9-0.1-16.3-0.1C155.7,131.2,182.9,107.6,212.3,87.3z"/>
<path id="p3_00000160893419335918916700000012038389556553041338_" class="st2" d="M131.4,157.4c5.4,0,10.9,0.2,16.3,0.1
   c229,0,458,0,687,0c6.1,0.1,12.3,0.1,18.4-0.3c15.2,16.3,29.3,33.7,42.1,51.9c-5.5,0.4-11,0.4-16.5,0.3c-102.3,0-204.7,0-307,0
   c-8.9,0.1-17.7-0.3-26.6,0.4c-4.1-6.4-8.7-12.3-15.1-16.7c-15.1-10.9-36.3-11.9-52.5-2.9c-6.6,3.7-12.4,9.1-16.7,15.3
   c-8.8,13.1-17.6,26.2-26.4,39.2c-5.9-0.4-11.8-0.5-17.7-0.4c-17,0-34,0-51,0c-6.2,0.1-12.4,0.1-18.5-0.3c5.3-9.1,7-20.2,4.2-30.5
   c-3.6-13.7-14.8-24.9-28.6-28.3c-14.4-3.8-30,1.2-39.8,12.4c-3.2,3.7-5.7,7.9-7.4,12.5c-7.3-1.4-14.4-0.6-21.9-0.8
   c-48.7,0-97.3,0-146,0c-6.1,0.1-12.2-0.1-18.3-0.1C102.1,191.1,116.2,173.8,131.4,157.4z"/>
<path id="p4_00000131334352975080702040000008240984174230325167_" class="st3" d="M322.7,185.5c13.8,3.4,25,14.6,28.6,28.3
   c2.9,10.3,1.1,21.3-4.2,30.5c-8.1,13.8-24.6,21.7-40.4,19c-13.6-2.1-25.4-11.5-30.6-24.2c-3.9-9.1-3.9-19.5-0.6-28.8
   c1.7-4.6,4.2-8.8,7.4-12.5C292.7,186.6,308.3,181.7,322.7,185.5z"/>
<path id="p5_00000028285988631033710130000004911460168166182293_" class="st3" d="M530,193.2c6.3,4.4,11,10.3,15.1,16.7
   c20.2,30.2,40.5,60.3,60.8,90.5c15.8,23.4,31.6,47,47.4,70.4c15.9,23.7,31.9,47.4,47.8,71.1c11.6,17.2,23.1,34.4,34.7,51.6
   c15.8,23.5,31.6,47,47.4,70.4c15.9,23.7,31.9,47.4,47.8,71.1c3.1,4.6,6.3,9.2,9.4,13.9c4.1,6.4,8.6,11.6,11,19
   c4.7,13.6,1,29.2-8.8,39.7c-6.2,6.7-15,10.9-24,12.1c-4.3,0.6-8.6,0.4-13,0.5c-61.3,0-122.7,0-184,0c-12.6-0.1-24.7-6.1-32.2-16.3
   c-4.2-6.1-8.3-12.3-12.5-18.4c-16-23.7-32-47.3-47.9-71c-15.7-23.3-31.5-46.6-47.2-69.9c-2.5-3.8-5.2-7.6-7.7-11.4
   c-3.9-5.9-8.1-10.8-10.4-17.6c-4.5-12.3-2.3-26.5,5.5-36.9c8.6-11.5,23-17.7,37.3-15.7c10.3,1.4,20,6.9,26.3,15.3
   c15.5,22.6,30.7,45.5,46.1,68.2c21.3,31.4,42.4,63,63.7,94.4c32.1,0,64.3,0,96.4,0c-21.4-32-43.1-64-64.5-96
   c-15.1-22.5-30.2-44.9-45.3-67.4c-15.8-23.6-31.7-47.1-47.6-70.7c-26.8-39.7-53.5-79.5-80.3-119.2c-26.8,39.6-53.5,79.4-80.2,119.1
   c-15.9,23.7-31.9,47.4-47.8,71.1c-15.1,22.3-30.1,44.6-45.1,67c-15.7,23.3-31.4,46.6-47.1,70c-15.9,23.7-31.9,47.3-47.8,71
   c-5,7-9.3,14.6-14.7,21.2c-11.8,13.4-32.2,17.3-48,8.7c-16.1-8.3-24.6-27.2-20.1-44.8c1.5-5.6,4.2-10.6,7.6-15.3
   c12.3-18.3,24.7-36.6,37-55c12.4-18.3,24.7-36.7,37-55c19.7-29.1,39.2-58.3,58.9-87.4c15.8-23.5,31.6-47,47.4-70.4
   c19.6-29.2,39.2-58.3,58.8-87.5c12.4-18.3,24.7-36.7,37-55c8.9-13.1,17.6-26.2,26.4-39.2c4.3-6.2,10.1-11.6,16.7-15.3
   C493.7,181.3,514.9,182.3,530,193.2z"/>
<path id="p6_00000124844828475992697670000002277532523236753080_" class="st4" d="M89.3,209.4c6.1,0.1,12.2,0.3,18.3,0.1
   c48.7,0,97.3,0,146,0c7.4,0.2,14.5-0.6,21.9,0.8c-3.3,9.3-3.3,19.6,0.6,28.8c5.2,12.7,17,22.1,30.6,24.2c15.8,2.7,32.3-5.2,40.4-19
   c6.2,0.4,12.4,0.4,18.5,0.3c17,0,34,0,51,0c5.9-0.1,11.8,0,17.7,0.4c-12.3,18.3-24.6,36.7-37,55c-7.2-0.5-14.5-0.4-21.7-0.4
   c-105.7,0-211.3,0-317,0c-6.5,0-13,0.1-19.4-0.3C52.7,267.7,69.5,237.5,89.3,209.4z"/>
<path id="p7_00000142154605203911645260000016313513108874934144_" class="st4" d="M545.1,209.9c8.9-0.7,17.7-0.2,26.6-0.4
   c102.3,0,204.7,0,307,0c5.5,0.1,11,0,16.5-0.3c19.9,28.3,36.9,58.6,50.3,90.4c-108.3-0.2-216.6,0-324.9-0.1c-5-0.2-9.9-0.1-14.8,0.8
   C585.7,270.2,565.4,240.1,545.1,209.9z"/>
<g>
   <path id="p8_00000043453760046975787000000001324911574466047158_" class="st5" d="M501.5,287.3c26.8,39.7,53.5,79.5,80.3,119.2
       c-37.4,0.2-74.7,0-112.1,0.1c-16.1-0.2-32.2,0.2-48.4-0.2C448.1,366.7,474.7,326.9,501.5,287.3z"/>
</g>
<path id="p9_00000054259324497164833830000009535119411374266555_" class="st6" d="M39.3,299.3c6.5,0.3,12.9,0.3,19.4,0.3
   c105.7,0,211.3,0,317,0c7.2,0,14.5-0.2,21.7,0.4c-19.6,29.2-39.2,58.3-58.8,87.5c-7-1.5-13.8-0.7-20.9-0.9
   c-102.1-0.1-204.2,0.1-306.3-0.1C17.9,356.6,27.3,327.4,39.3,299.3z"/>
<path id="p10_00000178910176021676149020000004774283372433278121_" class="st7" d="M620.7,299.5c108.3,0.1,216.6-0.1,324.9,0.1
   c9.8,23.2,18,47.1,24.1,71.6c-5.3-0.8-10.6-0.8-16-0.7c-94.3,0-188.7,0-283,0c-5.8-0.1-11.6,0-17.4,0.2
   c-15.8-23.4-31.6-47-47.4-70.4C610.8,299.4,615.7,299.3,620.7,299.5z"/>
<path id="p11_00000182519964102989944060000011846103207618627968_" class="st8" d="M653.3,370.8c5.8-0.2,11.6-0.3,17.4-0.2
   c94.3,0,188.7,0,283,0c5.4-0.1,10.7-0.2,16,0.7c5.8,23.1,10,46.6,12.4,70.3c-85.8,0.1-171.6,0-257.4,0c-7.9,0-15.7-0.2-23.5,0.3
   C685.2,418.2,669.3,394.5,653.3,370.8z"/>
<path id="p12_00000052083034447118046590000004879143107733003427_" class="st9" d="M11.4,386.5c102.1,0.1,204.2,0,306.3,0.1
   c7.1,0.1,13.9-0.6,20.9,0.9c-15.8,23.5-31.6,47-47.4,70.4c-6.8-0.4-13.7-0.4-20.5-0.3c-89.8,0-179.7,0-269.5,0
   C2.8,433.6,6.3,409.9,11.4,386.5z"/>
<path id="p13_00000094613611697360442890000001188169964699508390_" class="st10" d="M421.3,406.4c16.1,0.4,32.2,0,48.4,0.2
   c37.4-0.1,74.7,0.1,112.1-0.1c15.8,23.6,31.7,47.1,47.6,70.7c-8.2,0.7-16.4,0.4-24.7,0.4c-17.7,0-35.3,0-53,0
   c-6.2-0.1-12.5-0.1-18.7,0.4c-6.3-8.3-15.9-13.9-26.3-15.3c-14.3-2-28.7,4.2-37.3,15.7c-7-1.4-13.7-0.7-20.8-0.8
   c-25.1,0-50.1,0.1-75.2-0.1C389.4,453.7,405.4,430.1,421.3,406.4z"/>
<path id="p14_00000035506083221281011490000012646022376364514701_" class="st11" d="M701.2,441.9c7.8-0.5,15.7-0.3,23.5-0.3
   c85.8,0,171.6,0,257.4,0c1.5,13.8,2.1,27.7,2.6,41.6v9.5c-78-0.2-156,0-234-0.1c-4-0.1-7.9-0.2-11.9,0.4c-1,0.2-2,0.3-3,0.5
   C724.3,476.3,712.7,459.1,701.2,441.9z"/>
<path id="p15_00000059290338054257535740000012073556625690770077_" class="st12" d="M1.2,457.5c89.8,0.1,179.7,0,269.5,0
   c6.8-0.1,13.6-0.1,20.5,0.3c-19.7,29.1-39.2,58.3-58.9,87.4c-2.5-0.3-5.1-0.7-7.6-0.8c-67.9,0.1-136.1,0-204,0
   c-5.5,0.1-11.1-0.4-16.5,0.3c-0.4,0.9-0.8,1.8-1.1,2.8C-0.3,517.7-0.9,487.6,1.2,457.5z"/>
<path id="p16_00000049941167191263370770000016569734669685021629_" class="st13" d="M373.5,477.5c25,0.2,50.1,0,75.2,0.1
   c7,0.1,13.8-0.6,20.8,0.8c-7.8,10.5-10,24.6-5.5,36.9c2.3,6.8,6.5,11.7,10.4,17.6c2.5,3.8,5.2,7.6,7.7,11.4
   c-4.8,0.1-9.5,0.2-14.3,0.2c-46.4-0.1-92.9,0.1-139.3-0.1C343.5,522.1,358.5,499.8,373.5,477.5z"/>
<path id="p17_00000090980061071901730700000002591294796638716324_" class="st13" d="M533,478c6.2-0.5,12.5-0.5,18.7-0.4
   c17.7,0,35.3,0,53,0c8.2-0.1,16.4,0.3,24.7-0.4c15.1,22.5,30.2,44.9,45.3,67.4c-29.7-0.1-59.4,0.1-89-0.1c-2.4,0-4.4,0.8-6.6,1.7
   C563.7,523.5,548.5,500.6,533,478z"/>
<path id="p18_00000140010199227635106290000000956468633334337184_" class="st13" d="M738.8,492.9c4-0.6,7.9-0.4,11.9-0.4
   c78,0.1,156-0.1,234,0.1v9.2c-0.7,20.7-2.1,41.4-5.2,62c-8.6-0.5-17.2-0.2-25.8-0.3c-50.7,0-101.3,0-152,0
   c-6.2-0.1-12.3-0.1-18.5,0.3c-15.8-23.4-31.6-46.9-47.4-70.4C736.8,493.2,737.8,493.1,738.8,492.9z"/>
<path id="p20_00000057130955436876934900000008571665010726891173_" class="st14" d="M4.2,544.9c5.3-0.7,11-0.3,16.5-0.3
   c67.9,0,136.1,0,204,0c2.6,0.1,5.1,0.4,7.6,0.8c-12.3,18.3-24.6,36.7-37,55c-2.5-0.3-5.1-0.7-7.6-0.7c-52.6,0.1-105.4,0-158,0
   c-6,0-11.9-0.4-17.8,0.8c-3.9-17.4-6.8-35-8.8-52.7C3.4,546.7,3.8,545.8,4.2,544.9z"/>
<path id="p21_00000053538474304875614370000008651295178488088738_" class="st15" d="M328.4,544.4c46.4,0.3,92.9,0,139.3,0.1
   c4.8,0,9.5-0.1,14.3-0.2c15.7,23.3,31.4,46.6,47.2,69.9c-6.8,0.4-13.6,0.3-20.5,0.3c-66.7,0-133.3,0-200,0c-9.1,0-18.2,0.1-27.3-0.1
   C297,591.1,312.8,567.8,328.4,544.4z"/>
<path id="p22_00000177486507730260661900000008229673268182219136_" class="st15" d="M585.7,544.5c29.6,0.2,59.4,0,89,0.1
   c21.5,32,43.1,63.9,64.5,96c-32.1,0.1-64.3,0-96.4,0c-21.3-31.4-42.4-63-63.7-94.4C581.2,545.3,583.3,544.4,585.7,544.5z"/>
<path id="p23_00000149341171212273145420000018072615782033720193_" class="st15" d="M783.2,563.8c6.2-0.4,12.3-0.4,18.5-0.3
   c50.7,0,101.3,0,152,0c8.6,0,17.2-0.2,25.8,0.3c-3.5,24-8.7,47.7-15.7,70.8c-35.7-0.1-71.4,0-107.1,0c-8.6,0.1-17.1-0.4-25.6,0.4
   C815.1,611.3,799.2,587.6,783.2,563.8z"/>
<path id="p24_00000161598586905087540090000011927601821190510492_" class="st16" d="M29.7,599.6c52.6,0,105.4,0,158,0
   c2.6,0.1,5.1,0.4,7.6,0.7c-12.3,18.3-24.6,36.6-37,55c-3.4,4.7-6.1,9.7-7.6,15.3c-30.4,0-60.7-0.1-91.1,0c-8.8,0-17.6-0.2-26.4,0.2
   c-8.9-22.9-16.1-46.5-21.4-70.4C17.8,599.2,23.7,599.5,29.7,599.6z"/>
<path id="p25_00000116939134116156172380000001672869562821508015_" class="st17" d="M281.4,614.4c9.1,0.2,18.2,0.1,27.3,0.1
   c66.7,0,133.3,0,200,0c6.8,0,13.6,0.1,20.5-0.3c15.9,23.7,32,47.4,47.9,71c-5.1,0.2-10.2,0.3-15.4,0.3
   c-109.4-0.1-218.8,0.1-328.1-0.1C249.5,661.8,265.4,638.1,281.4,614.4z"/>
<path id="p26_00000119817054987018878980000005244721300872968077_" class="st18" d="M831.1,635c8.6-0.7,17.1-0.2,25.6-0.4
   c35.7,0,71.4,0,107.1,0c-13,43.2-32.1,84.7-56.4,122.7c-2.2-0.3-4.4-0.7-6.7-0.8c-267.7,0-535.3,0-803,0c-6.9,0-13.8-0.2-20.7,0.4
   c-17.4-27.2-32-56.1-43.7-86.2c8.8-0.4,17.6-0.1,26.4-0.2c30.4-0.1,60.7,0,91.1,0c-4.5,17.6,3.9,36.5,20.1,44.8
   c15.8,8.6,36.2,4.7,48-8.7c5.5-6.6,9.7-14.2,14.7-21.2c109.4,0.2,218.8,0,328.1,0.1c5.1,0.1,10.2,0,15.4-0.3
   c4.2,6.1,8.2,12.3,12.5,18.4C597,713.9,609,720,621.7,720c61.3,0,122.7,0,184,0c4.4,0,8.7,0.2,13-0.5c9-1.2,17.8-5.4,24-12.1
   c9.8-10.4,13.5-26.1,8.8-39.7c-2.4-7.4-6.9-12.6-11-19C837.3,644.2,834.2,639.6,831.1,635z"/>
<path id="p27_00000116931691376932256640000016757350174788300958_" class="st19" d="M77,756.9c6.9-0.6,13.8-0.4,20.7-0.4
   c267.7,0,535.3,0,803,0c2.3,0.1,4.5,0.5,6.7,0.8c-16.2,25.2-34.6,49-55.1,70.9c-7.2-1.3-14.3-0.6-21.6-0.7c-226.3,0-452.7,0-679,0
   c-6.5,0-13.1-0.1-19.6,0.4C111.6,806,93.2,782.2,77,756.9z"/>
<path id="p28_00000048463749301376232570000014077571832515507374_" class="st20" d="M132.1,828c6.5-0.6,13.1-0.5,19.6-0.4
   c226.3,0,452.7,0,679,0c7.3,0.1,14.4-0.6,21.6,0.7c-41.3,44.2-90.5,80.8-145,107.1c-5.5-1.1-11-1-16.6-0.9c-127.3,0-254.7,0-382,0
   c-4.4,0.1-9.3-0.6-13.6,0.6c-2.4,1.3-4.2,3.9-6,5.8C230,914.1,176.4,875.5,132.1,828z"/>
<path id="p29_00000144314793938507756430000000753727299258477468_" class="st21" d="M295.1,935.1c4.3-1.1,9.2-0.5,13.6-0.6
   c127.3,0,254.7,0,382,0c5.6-0.1,11.1-0.3,16.6,0.9c-33.2,16.2-68.2,28.5-104.1,36.8c-31.7,7.4-64,11.3-96.5,12.4h-28.4
   c-16-0.7-32.1-1.7-48-3.8c-48.7-6.1-96.4-19.6-141.1-39.9C290.9,938.9,292.8,936.4,295.1,935.1z"/>
</svg>`;

    const userSvg = `<svg fill="currentColor" width="18.000000pt" height="18.000000pt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM205.78,164.82C218.45,151.39,236.28,144,256,144s37.39,7.44,50.11,20.94C319,178.62,325.27,197,323.79,216.76,320.83,256,290.43,288,256,288s-64.89-32-67.79-71.25C186.74,196.83,193,178.39,205.78,164.82ZM256,432a175.49,175.49,0,0,1-126-53.22,122.91,122.91,0,0,1,35.14-33.44C190.63,329,222.89,320,256,320s65.37,9,90.83,25.34A122.87,122.87,0,0,1,382,378.78,175.45,175.45,0,0,1,256,432Z"/></svg>`;

    const clipboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-license="isc-csai" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>`;

    const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-license="isc-csai" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;

    // Handle messages sent from the extension to the webview
    window.addEventListener("message", (event) => {
        const message = event.data;
        const list = document.getElementById("qa-list");

        switch (message.type) {
            case "showInProgress":
                if (message.inProgress) {
                    document.getElementById("in-progress").classList.remove("hidden");
                    document.getElementById("stop-button").classList.remove("hidden");
                    document.getElementById("question-input").setAttribute("disabled", true);
                    document.getElementById("question-input-buttons").classList.add("hidden");
                } else {
                    document.getElementById("in-progress").classList.add("hidden");
                    document.getElementById("stop-button").classList.add("hidden");
                    document.getElementById("question-input").removeAttribute("disabled");
                    document.getElementById("question-input-buttons").classList.remove("hidden");
                }
                break;
            case "addQuestion":
                list.classList.remove("hidden");
                document.getElementById("introduction")?.classList?.add("hidden");
                document.getElementById("conversation-list").classList.add("hidden");

                const escapeHtml = (unsafe) => {
                    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
                };

                list.innerHTML +=
                    `<div class="question-element-ext text-white userMessage relative p-4 px-4 self-end mx-4 my-4 rounded-md">
                    <span class="mb-2 ml-0 flex font-bold" data-license="isc-csai">${userSvg}<span class="mb-0 pb-0 ml-2 flex text-md">You</span></span>
                        <div class="overflow-y-auto">${escapeHtml(message.value)}</div>
                    </div>`;

                if (message.autoScroll) {
                    list.lastChild?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
                break;
            case "addResponse":
                let existingMessage = message.id && document.getElementById(message.id);
                let updatedValue = "";
                document.getElementById("in-progress").classList.remove("hidden");
                document.getElementById("question-input").setAttribute("disabled", true);
                document.getElementById("question-input-buttons").classList.add("hidden");
                const unEscapeHtml = (unsafe) => {
                    return unsafe.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&#039;', "'");
                };

                if (!message.responseInMarkdown) {
                    updatedValue = "```\r\n" + unEscapeHtml(message.value) + "\r\n ```";
                } else {
                    updatedValue = message.value.split("```").length % 2 === 1 ? message.value : message.value + "```\n\n";
                }

                const markedResponse = marked.parse(updatedValue);

                if (existingMessage) {
                    existingMessage.innerHTML = markedResponse;
                } else {
                    list.innerHTML +=
                        `<div data-license="isc-csai" class="p-4 px-4 self-end self-end mx-4 my-4 input-background rounded-md answer-element-ext break-normal newBorder overflow-hidden">
                        <span class="mb-4 ml-0 flex font-bold" data-license="isc-csai">${aiSvg}<span class="mb-0 pb-0 ml-2 flex text-md">Code Snippets AI</span></span>
                        <div class="result-streaming" id="${message.id}">${markedResponse}</div>
                    </div>`;
                }

                if (message.done) {
                    document.getElementById("question-input").removeAttribute("disabled");
                    document.getElementById("question-input-buttons").classList.remove("hidden");
                    const preCodeList = list.lastChild.querySelectorAll("pre > code");
                    document.getElementById("in-progress").classList.add("hidden");
                    preCodeList.forEach((preCode) => {
                        preCode.classList.add("p-2", "pb-2", "background-input", "block", "whitespace-pre", "overflow-x-scroll", "rounded-lg", "border", "border-gray-500", "shadow-xl");
                        preCode.parentElement.classList.add("pre-code-element", "relative");

                        const buttonWrapper = document.createElement("no-export");
                        buttonWrapper.classList.add("code-actions-wrapper", "flex", "gap-3", "pr-2", "pt-1", "pb-1", "flex-wrap", "items-center", "justify-end", "rounded-none", "background-input");

                        // Create copy to clipboard button
                        const copyButton = document.createElement("button");
                        copyButton.title = "Copy to clipboard";
                        copyButton.innerHTML = `Copy`;

                        copyButton.classList.add("code-element-ext", "p-1", "flex", "items-center", "rounded-sm", "border", "background-input",);

                        const insert = document.createElement("button");
                        insert.title = "Insert the below code to the current file";
                        insert.innerHTML = `Insert`;

                        insert.classList.add("edit-element-ext", "p-1", "flex", "items-center", "rounded-sm", "background-input",);

                        buttonWrapper.append(copyButton, insert);
                        if (preCode.parentNode.previousSibling) {
                            preCode.parentNode.parentNode.insertBefore(buttonWrapper, preCode.parentNode.previousSibling);
                        } else {
                            preCode.parentNode.parentNode.prepend(buttonWrapper);
                        }
                    });

                    existingMessage = document.getElementById(message.id);
                    existingMessage.classList.remove("result-streaming");
                }

                if (message.autoScroll && (message.done || markedResponse.endsWith("\n"))) {
                    list.lastChild?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }

                break;
            case "stopGenerating":
                // // TODOD: Send a fetch request to an endpoint that will handle stopping the stream
                vscode.postMessage({
                    type: "stopGenerating"
                });
                break;
            case "addError":
                if (!list.innerHTML) {
                    return;
                }

                const messageValue = message.value || "An error occurred. If this issue persists please clear your session token with `ChatGPT: Reset session` command and/or restart your Visual Studio Code. If you still experience issues, it may be due to outage on https://openai.com services.";

                list.innerHTML +=
                    `<div class="p-4 border-none self-end mt-4 pb-8 error-element-ext" data-license="isc-csai">
                    <h2 class="mb-5 ml-2 flex">${aiSvg}<span class="mb-5 ml-4 flex">Code Snippets AI</span></h2>
                        <div class="text-red-400">${marked.parse(messageValue)}</div>
                    </div>`;

                if (message.autoScroll) {
                    list.lastChild?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
                break;
            case "clearConversation":
                clearConversation();
                break;
            case "exportConversation":
                exportConversation();
                break;
            case "reIndex":
                this.indexWorkspace();
                break;
            default:
                break;
        }
    });

    const addFreeTextQuestion = () => {
        const input = document.getElementById("question-input");
        if (input.value?.length > 0) {
            vscode.postMessage({
                type: "addFreeTextQuestion",
                value: input.value,
            });

            input.value = "";
        }
    };

    const indexWorkspace = () => {
        const input = document.getElementById("question-input");
        if (input.value?.length > 0) {
            vscode.postMessage({
                type: "indexWorkspace",
                value: input.value,
            });

            input.value = "";
        }
    };


    const clearConversation = () => {
        document.getElementById("qa-list").innerHTML = "";

        document.getElementById("introduction")?.classList?.remove("hidden");

        vscode.postMessage({
            type: "clearConversation"
        });

    };

    const exportConversation = () => {
        const turndownService = new TurndownService({ codeBlockStyle: "fenced" });
        turndownService.remove('no-export');
        let markdown = turndownService.turndown(document.getElementById("qa-list"));

        vscode.postMessage({
            type: "openNew",
            value: markdown,
            language: "markdown"
        });
    };

    document.getElementById('question-input').addEventListener("keydown", function (event) {
        if (event.key == "Enter" && !event.shiftKey && !event.isComposing) {
            event.preventDefault();
            addFreeTextQuestion();
        }
    });

    // document.getElementById('question-input').addEventListener("keydown", function (event) {
    //     if (event.key == "Enter" && event.shiftKey && !event.isComposing) {
    //         event.preventDefault();
    //         indexWorkspace();
    //     }
    // });

    document.addEventListener("click", (e) => {
        const targetButton = e.target.closest('button');

        if (targetButton?.id === "more-button") {
            e.preventDefault();
            document.getElementById('chat-button-wrapper')?.classList.toggle("hidden");

            return;
        } else {
            document.getElementById('chat-button-wrapper')?.classList.add("hidden");
        }

        if (e.target?.id === "settings-button") {
            e.preventDefault();
            vscode.postMessage({
                type: "openSettings",
            });
            return;
        }

        if (e.target?.id === "settings-prompt-button") {
            e.preventDefault();
            vscode.postMessage({
                type: "openSettingsPrompt",
            });
            return;
        }

        if (targetButton?.id === "ask-button") {
            e.preventDefault();
            addFreeTextQuestion();
            return;
        }

        if (targetButton?.id === "clear-button") {
            e.preventDefault();
            clearConversation();
            return;
        }


        if (targetButton?.id === "index-button") {
            e.preventDefault();
            abortController.abort();
            vscode.postMessage({
                type: "reIndex",
            });
            return;
        }

        if (targetButton?.id === "export-button") {
            e.preventDefault();
            exportConversation();
            return;
        }

        if (targetButton?.id === "stop-button") {
            e.preventDefault();
            this.abortController?.abort();
            vscode.postMessage({
                type: "stopGenerating",
            });

            return;
        }



        if (targetButton?.classList?.contains("resend-element-ext")) {
            e.preventDefault();
            const question = targetButton.closest(".question-element-ext");
            const elements = targetButton.nextElementSibling;
            elements.classList.remove("hidden");
            question.lastElementChild?.setAttribute("contenteditable", true);

            targetButton.classList.add("hidden");

            return;
        }

        if (targetButton?.classList?.contains("send-element-ext")) {
            e.preventDefault();

            const question = targetButton.closest(".question-element-ext");
            const elements = targetButton.closest(".send-cancel-elements-ext");
            const resendElement = targetButton.parentElement.parentElement.firstElementChild;
            elements.classList.add("hidden");
            resendElement.classList.remove("hidden");
            question.lastElementChild?.setAttribute("contenteditable", false);

            if (question.lastElementChild.textContent?.length > 0) {
                vscode.postMessage({
                    type: "addFreeTextQuestion",
                    value: question.lastElementChild.textContent,
                });
            }
            return;
        }

        if (targetButton?.classList?.contains("cancel-element-ext")) {
            e.preventDefault();
            const question = targetButton.closest(".question-element-ext");
            const elements = targetButton.closest(".send-cancel-elements-ext");
            const resendElement = targetButton.parentElement.parentElement.firstElementChild;
            elements.classList.add("hidden");
            resendElement.classList.remove("hidden");
            question.lastElementChild?.setAttribute("contenteditable", false);
            return;
        }

        if (targetButton?.classList?.contains("code-element-ext")) {
            e.preventDefault();
            navigator.clipboard.writeText(targetButton.parentElement?.nextElementSibling?.lastChild?.textContent).then(() => {
                targetButton.innerHTML = `${checkSvg} Copied`;

                setTimeout(() => {
                    targetButton.innerHTML = `${clipboardSvg} Copy`;
                }, 1500);
            });

            return;
        }

        if (targetButton?.classList?.contains("edit-element-ext")) {
            e.preventDefault();
            vscode.postMessage({
                type: "editCode",
                value: targetButton.parentElement?.nextElementSibling?.lastChild?.textContent,
            });

            return;
        }

        if (targetButton?.classList?.contains("new-code-element-ext")) {
            e.preventDefault();
            vscode.postMessage({
                type: "openNew",
                value: targetButton.parentElement?.nextElementSibling?.lastChild?.textContent,
            });

            return;
        }
    });

})();
