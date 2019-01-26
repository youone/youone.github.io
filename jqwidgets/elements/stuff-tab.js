let template = document.createElement('template');

template.innerHTML =`
    <div id="stuffHeader">header
    </div>

    <div class="stuff-splitter">
        <div id="splitLeft">
            <div id="jqxDocking">
                <div>
                    <div id="window1">
                        <div>Header 1</div>
                        <div><div style="height:50px">Content1</div></div>
                    </div>
                    <div id="window2">
                        <div>Header 2</div>
                        <div><div style="height:30px">Content2</div></div>
                    </div>
                    <div id="window3">
                        <div>Header 3</div>
                        <div><div style="height:40px">Content2</div></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="splitRight">
            <div style="width:100%; height:100%">panel2</div>
        </div>
    </div>

    <div style="width: 100%; height:30px; font-size: 16px; font-weight: bold; padding-top:10px">Section 1</div>

    <div id='jqxnavigation'>
        <div>Header 1</div>
        <div><div style="height:200px">Epand Content</div></div>
        <div>Header 2</div>
        <div><div style="height:200px">Epand Content</div></div>
        <div>Header 4</div>
        <div><div style="height:200px">Epand Content</div></div>
    </div>

    <div style="width: 100%; height:30px; font-size: 16px; font-weight: bold; padding-top:10px">Section 2</div>
    
    <div id="stuffLists">
        <div id="listDocking">
            <div>
                <div id="list1">
                    <div>Header 1</div>
                    <div>
                        <!--<div id='jqxexpander1' class="myjqxexpander">-->
                            <!--<div>Header 1</div>-->
                            <!--<div>Content 1</div>-->
                        <!--</div>-->
                        <!--<div id='jqxexpander2' class="myjqxexpander">-->
                            <!--<div>Header 1</div>-->
                            <!--<div>Content 1</div>-->
                        <!--</div>-->
                        <!--<div id='jqxexpande3' class="myjqxexpander">-->
                            <!--<div>Header 1</div>-->
                            <!--<div>Content 1</div>-->
                        <!--</div>-->
                        <!--<div style="height:500px">List Content1</div>-->
                    </div>
                </div>
                <div id="list2">
                    <div>Header 2</div>
                    <div><div style="height:"20px">List Content2</div></div>
                </div>
            </div>
        </div>
    </div>
`;

class StuffTab extends HTMLElement {
    constructor() {
        super();

        this.id = this.getAttribute('id');

        let data = {
            name: 'stuffName'
        };

        $(this).html($(template.content.cloneNode(true)));

        $(this).find('#stuffHeader').jqxPanel({
            theme: window.jqxTheme,
            // sizeMode: 'wrap',
            width: 'calc(100% - 4px)',
            height: 50,
        });

        $(this).find("#jqxDocking").jqxDocking({
            theme: window.jqxTheme,
            width: '100%',
            windowsOffset: 0
        });


        $(this).find('.stuff-splitter').jqxSplitter({
            theme: '',
            width: 'calc(100% - 4px)',
            height: $(this).find("#window1").outerHeight() + $(this).find("#window2").outerHeight() + $(this).find("#window3").outerHeight() + 5,
            // height: 200
            panels: [{ size: '30%', max: 1000, min: 50 }, { size: '70%', max: 2000 }],
        });

        // $(this).find('#stuffLists').jqxPanel({
        //     theme: window.jqxTheme,
        //     // sizeMode: 'wrap',
        //     width: 'calc(100% - 4px)',
        //     height:'auto',
        // });

        $(this).find("#jqxnavigation").jqxNavigationBar({
            theme: window.jqxTheme,
            expandMode: 'multiple',
            width: '100%',
            // height: '500px',
        });

        // $(this).find(".myjqxexpander").jqxExpander({
        //     theme: window.jqxTheme,
        //     width: '100%',
        //     height: '150px',
        // });

        $(this).find("#listDocking").jqxDocking({
            theme: window.jqxTheme,
            width: '100%',
            windowsOffset: 0,
        });

        // $(this).find('#splitRight').jqxPanel({
        //     autoUpdate: false
        // });
        // $(this).find('#splitLeft').jqxPanel({
        //     autoUpdate: false
        // });

        console.log('constructed stuff tab');
        console.log($(this).find("#jqxDocking").height());
    }
}

window.customElements.define("stuff-tab", StuffTab);
export default StuffTab