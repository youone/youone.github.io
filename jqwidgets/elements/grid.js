class Grid extends HTMLElement {

    constructor() {
        super();
        console.log('Grid constructed');
    }

    connectedCallback() {
        console.log('Grid connected');

        let source =
            {
                localdata: generatedata(5000),
                datafields:
                    [
                        { name: 'name', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'date', type: 'date'},
                        { name: 'quantity', type: 'number' }
                    ],
                datatype: "array"
            };
        let dataAdapter = new $.jqx.dataAdapter(source);

        let theGrid = $('<div>')
            .addClass('jqx-hideborder')
            .jqxGrid(
                {
                    theme: window.jqxTheme,
                    altrows: true,
                    sortable: true,
                    sortmode: 'many',
                    width: '99%',
                    height: '100%',
                    source: dataAdapter,
                    showfilterrow: true,
                    filterable: true,
                    rowsheight: 20,
                    showheader: true,
                    filterrowheight: 27,
                    columnsresize: true,
                    columnsreorder: true,
                    // autoshowfiltericon: false,
                    showfiltermenuitems: false,
                    showsortmenuitems: false,
                    showsortcolumnbackground: false,
                    selectionmode: 'multiplerows',
                    columns: [
                        {
                            text: '#', sortable: false, filterable: false, editable: false,
                            groupable: false, draggable: false, resizable: false,
                            datafield: '', columntype: 'number', width: 50,
                            cellsrenderer: function (row, column, value) {
                                return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                            }
                        },
                        { text: 'Name', columntype: 'textbox', datafield: 'name', width: 215 },
                        { text: 'Product', datafield: 'productname', width: 220},
                        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                        { text: 'Ship Date', datafield: 'date', width: 210, cellsalign: 'right', cellsformat: 'd' },
                        { text: 'Qty.', datafield: 'quantity',  cellsalign: 'right' }
                        // { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                        // { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220},
                        // { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
                        // { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                        // { text: 'Qty.', datafield: 'quantity', filtertype: 'number',  cellsalign: 'right' }
                    ]
            })
            .on('contextmenu', event => {
                event.preventDefault();
                console.log('context');
            });

        let toolbar = $('<div>')
            .addClass('jqx-hideborder')
            .jqxToolBar({
                // theme: theme, width: '100%', height: 35, tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input | custom',
                theme: window.jqxTheme,
                width: '100%',
                height: 40,
                tools: 'button custom',
                initTools: (type, index, tool, menuToolIninitialization) => {
                    console.log(index);
                    switch (index) {
                        case 0:
                            tool.css({
                                width: '30px'
                            });
                            break;
                        case 1:
                            tool.jqxFileUpload({uploadUrl: 'imageUpload.php', fileInputName: 'fileToUpload', theme: window.jqxTheme });
                            break;
                    }
                }
            });

        $(this)
            .html(theGrid);
            // .append(toolbar);

        // theGrid.jqxGrid('autoresizecolumns');
        theGrid.find('.jqx-scrollbar').each(function() {
            console.log("SCROLLBAR",this);
            $(this).jqxScrollBar({thumbMinSize:50, width: '100px'});
        })
    }
}

window.customElements.define('grid-base', Grid);

export default Grid;

// $(document).ready(function () {
//     var data = generatedata(5000);
//     var source =
//         {
//             localdata: data,
//             datafields:
//                 [
//                     { name: 'name', type: 'string' },
//                     { name: 'productname', type: 'string' },
//                     { name: 'available', type: 'bool' },
//                     { name: 'date', type: 'date'},
//                     { name: 'quantity', type: 'number' }
//                 ],
//             datatype: "array"
//         };
//     var dataAdapter = new $.jqx.dataAdapter(source);
//     $("#grid").jqxGrid(
//         {
//             theme: 'metro',
//             sortable: true,
//             sortmode: 'many',
//             width: '100%',
//             height: '95%',
//             source: dataAdapter,
//             showfilterrow: true,
//             filterable: true,
//             rowsheight: 20,
//             showheader: true,
//             // filterrowheight: 30,
//             // autoshowfiltericon: false,
//             showfiltermenuitems: false,
//             showsortmenuitems: false,
//             showsortcolumnbackground: false,
//             selectionmode: 'multiplerows',
//             columns: [
//                 { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
//                 {
//                     text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220
//                 },
//                 { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
//                 { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
//                 { text: 'Qty.', datafield: 'quantity', filtertype: 'number',  cellsalign: 'right' }
//             ]
//         });
//     // $('#clearfilteringbutton').jqxButton({ height: 25});
//     // $('#clearfilteringbutton').click(function () {
//     //     $("#grid").jqxGrid('clearfilters');
//     // });
// });
