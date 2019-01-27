import "./elements/grid.js"
import "./elements/stuff-tab.js"
import "./elements/result-tab.js"
import "./elements/browse-tree.js"

window.jqxTheme = 'metro';

$(document).on('keydown', event => {
    // console.log(event.keyCode);
    console.log();

    switch (event.keyCode) {
        case 220:
            if (document.activeElement.getAttribute('id') !== 'searchInput') {
                event.preventDefault();
                $('#sbTabs').jqxTabs('select', 0);
                searchInput.focus();
                break;
            }
    }
});

document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function () {

    // $('document').on('contextmenu', event => {
    //     event.preventDefault();
    // });

    let contextMenu = $("#jqxMenu").jqxMenu({
        theme: window.jqxTheme,
        // width: '120px',
        // height: '140px',
        autoOpenPopup: false,
        mode: 'popup',
        popupZIndex: 9999999
    });

    let favoritesMenu = $("#favoritesMenu").jqxMenu({
        theme: window.jqxTheme,
        // width: '120px',
        // height: '140px',
        autoOpenPopup: false,
        mode: 'popup',
        popupZIndex: 999999
    });

    $("#addToFavoButton").jqxButton({theme: window.jqxTheme, width: 'calc(100%)', template: 'warning'}).on('click', event => {
        console.log('adding favorite');
    });
    $("#clearRecentButton").jqxButton({theme: window.jqxTheme, width: '100%'}).on('click', event => {
        console.log('clearing recent');
    });

    let dfb = $("#deleteFavoriteButton").jqxButton({theme: window.jqxTheme, template: 'danger'}).on('click', event => {
        console.log('deleting favorite', dfb.data());
        contextMenu.jqxMenu('close');
    })
        .on('mouseout', event => {
            contextMenu.jqxMenu('close');
        });


    $('#mainHeader').jqxPanel({theme: window.jqxTheme, height: 100, width: '100%'});
    $('#mainContent').jqxPanel({theme: window.jqxTheme, height: '100%', width: '100%'});

    $("#toolbar").jqxToolBar({
        theme: window.jqxTheme,
        width: '100%',
        height: 45,
        tools: 'button button | custom',
        initTools: (type, index, tool, menuToolIninitialization) => {
            switch(index) {
                case 0:
                    tool.jqxButton({
                        value: 'open stuff',
                        width: 100,
                    });
                    tool.jqxButton().on('click', event => {
                            mainTabs.jqxTabs('addLast','Stuff', '<stuff-tab id="123">');
                        });

                    break;
                case 1:
                    tool.jqxButton({
                        value: 'open result',
                        width: 100,
                    });
                    tool.jqxButton().on('click', event => {
                            mainTabs.jqxTabs('addLast','Stuff', '<result-tab id="123">');
                        });

                    break;
                case 2:
                    console.log('MOO', tool);

                    tool.append($('<div>').html('contentcontentcontentcontent'));

                    tool.jqxDropDownButton({
                        theme: window.jqxTheme,
                        width: 100,
                        autoOpen: true,
                    });
                    tool.jqxDropDownButton('setContent', 'test');
                    break;
            }
        }
    });

    $('.main-splitter').jqxSplitter({
        // resizable: false,
        width: '100%',
        height: '100%',
        panels: [{size: "250px", min: 250}],
        theme: '' });

    let mainTabs = $('#mainTabs').jqxTabs({
        showCloseButtons: true,
        position: 'top',
        width: '100%',
        height: '100%',
        reorder: true,
        theme: window.jqxTheme
    })
    .on('selected', event => {
        let tabName = mainTabs.jqxTabs('getTitleAt', event.args.item);
        console.log(mainTabs.jqxTabs('getContentAt', event.args.item));
    });

    let searchInput = $('#searchInput').jqxInput({
        theme: window.jqxTheme,
    })
        .width('calc(100% - 8px)')

        .on('analysis', (event, data) => {
            console.log(data);
        })

        .on('rightclick', (event, data) => {

            $('#favoritesList').jqxListBox({
                theme: window.jqxTheme,
                width: 150,
                source: [{label:'item1', value:'item1'}, {label:'item2', value:'item2'}],
                renderer: (index, label, value) => {
                    return '<favo-list-item label="' + label + '">'
                },
            }).on('select', event => {
                console.log(event.args.originalEvent.buttons);
                if (event.args.originalEvent.buttons === 1) {
                    searchInput.jqxInput('val', event.args.item.label);
                    favoritesMenu.jqxMenu('close');
                }
                if (event.args.originalEvent.buttons === 2) {
                    console.log(event.args.item.label, event.args.originalEvent.clientX, event.args.originalEvent.clientY);
                    contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX), parseInt(event.args.originalEvent.clientY));
                    dfb.data({item: event.args.item.label});
                }
            });


            $('#recentList').jqxListBox({
                width: 150,
                theme: window.jqxTheme,
                source: ['item1', 'item2'],
            });

            favoritesMenu.jqxMenu('open', data.position[3] + 10, data.position[2] - 1);

            console.log(data);
        });

    let searchToolbar = $('#searchToolbar');

    let searchToolbarContent = $('<div style="display:grid; grid-template-columns: auto auto;">').appendTo(searchToolbar);

    class FavoListItem extends HTMLElement {
        constructor() {
            super();
            this.label = this.getAttribute('label');
            let container = $('<div style="width: 100%; height: 100%; cursor:pointer">')
                .html(this.label)
                // .on('contextmenu', event => {
                //     event.preventDefault();
                //     // $('<div>').jqxMenu({ width: '120px', height: '140px', autoOpenPopup: false, mode: 'popup'});
                //     // $('<div style="position:absolute">').html('hej').prependTo('body');
                //     console.log(parseInt(event.clientX) + 5, parseInt(event.clientY) + 5, contextMenu);
                //     contextMenu.jqxMenu('open', parseInt(event.clientX), parseInt(event.clientY));
                //     dfb.data({item: this.label});
                // })
                .appendTo($(this));
        }

        connectedCallback() {
        }
    }
    window.customElements.define('favo-list-item', FavoListItem);

    class MyInput extends HTMLInputElement {
        constructor() {
            super();
            $(this).on('input', event => {
                console.log(this.value);
                $(this).trigger('analysis', {data: this.value});
            });

            $(this).on('focus', event => {
                this.select();
            });

            $(this).on('contextmenu', event => {
                let rect = this.getBoundingClientRect();
                $(this).trigger('rightclick', {position: [rect.top, rect.right, rect.bottom, rect.left]});
            });
        }

        connectedCallback() {

        }
    }
    window.customElements.define('my-input', MyInput, {extends: "input"});
    // window.customElements.define('my-input', MyInput);

    let favoList = $('<div>').jqxListBox({
        theme: window.jqxTheme,
        width: 150,
        source: [{label:'item1', value:'item1'}, {label:'item2', value:'item2'}],
        renderer: (index, label, value) => {
            // let favoItem = $('<div>').html(label);
            // favoItem.append($('<div>').jqxButton({ width: 120, height: 40, value: 'hej'}));
            // return favoItem[0].outerHTML;
            return '<favo-list-item label="' + label + '">'
        },

    }).appendTo(searchToolbarContent);

    favoList.on('select', event => {
        console.log(event.args.originalEvent.buttons);
        if (event.args.originalEvent.buttons === 1) searchToolbar.jqxDropDownButton('close');
        if (event.args.originalEvent.buttons === 2) {
            console.log(event.args.item.label, event);
            contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX), parseInt(event.args.originalEvent.clientY));
            dfb.data({item: event.args.item.label});
        }
        });

    let recentList = $('<div>').jqxListBox({
        width: 150,
        theme: window.jqxTheme,
        source: ['item1', 'item2'],
    }).appendTo(searchToolbarContent);

    searchToolbar.jqxDropDownButton({
        theme: window.jqxTheme,
        width: 'calc(100% - 8px)',
        // width: 'calc(50% - 5px)',
        // autoOpen: true,
        animationType: 'fade',
        closeDelay: 0,
    })
        .on('open', event => {
            // $('.jqx-rc-t-expanded').css('overflow', 'visible');
            $('.jqx-rc-t-expanded').css('width', 'unset');
        })
        .on('close', event => {
            $('.jqx-dropdownbutton-popup').css('overflow', 'hidden');
            favoList.jqxListBox('clearSelection');
        });
    searchToolbar.jqxDropDownButton('setContent', 'Options');

    let sbTabs = $('#sbTabs').jqxTabs({
        position: 'top',
        width: '100%',
        height: '100%',
        reorder: false,
        theme: window.jqxTheme
    })
    .on('selected', event => {
        let tabName = sbTabs.jqxTabs('getTitleAt', event.args.item);
        if (tabName === "Browse") {
            let bt = $(sbTabs.jqxTabs('getContentAt', event.args.item)).find('browse-tree')[0];
            bt.focusOnTree();
            console.log('tab selected', event.type, bt);
            // $('#btTab').html('<browse-tree>')
            //
            //
        }
    });

    $('browse-tree').on('entitySelected', (event, data) => {
        console.log('opening grid for', data);
        mainTabs.jqxTabs('addAt', 1, 'Grid', '<grid-base>');
    });

    mainTabs.jqxTabs('addLast','Stuff', '<result-tab id="123">');


});

$(window).on('resize', event => {
    let bt = $('browse-tree')[0];
    bt.update();
});


