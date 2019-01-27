let template = document.createElement('template');

template.innerHTML =`
<style>
.result-splitter, #splitLeft, #splitRight, #reultList {
    border: none;
}
</style>

<div class="result-splitter ">
    <div id="splitLeft">
        <div id='reultList'>
        </div>
    </div>
    <div id="splitRight">
    </div>
</div>
`;

class Group1ResultItem extends HTMLDivElement {

    constructor(data, width) {
        super();

        this.connected = false;

        if (data) {
            console.log(data);

            this.content = $('<div id="theContent" style="width: calc(100% - 5px); display: grid; grid-template-columns: auto auto">');
            this.content.append($('<div style="padding-right: 10px">').html('title1:'));
            this.content.append($('<div>').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'));
            this.content.append($('<div>').html('title2:'));
            this.content.append($('<div>').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'));
            this.content.append($('<div>').html('title3:'));
            this.content.append($('<div>').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'));

            console.log(this.content[0].outerHTML.length);

            this.panel = $(`<div id="thePanel" style="
            /*width: calc(100% - 10px); */
            /*height: 100px;*/
            /*border: 1px solid lightgrey;*/
            white-space: normal
            ">`).html(this.content).jqxPanel({
                theme: window.jqxTheme,
                width: width - 30,
                // width: 'calc(100% - 4px)',
                // height: 100,
                autoUpdate: true
            });

            // panel.jqxPanel({height: content.height()});
            // panel.jqxPanel('append', content[0]);

            $(this).html(this.panel);
        }

    }

    // connectedCallback() {
    //     if (!this.connected) {
    //         console.log('COOOOOOOOOOOOOOOON', $(this).find('#theContent').height());
    //         $(this).find('#thePanel').jqxPanel({height: $(this).find('#theContent').height()});
    //     }
    //     this.connected = true;
    // }
}
class Group2ResultItem extends HTMLDivElement {

    constructor(data, width) {
        super();

        if (data) {
            console.log(data);

            $(this).html($(`<div style="
            width: `+ (width - 30) +`px;
            /*width: calc(100% - 10px); */
            /*height: 50px;*/
            margin: 0px;
            border: 1px solid lightgrey;
            white-space: normal;
            ">`)
                .html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'))
        }
    }
}
class Group3ResultItem extends HTMLSpanElement {

    constructor(data, width) {
        super();

        if (data) {
            console.log(data);

            $(this).html($(`<div style="
            width: calc(100% - 10px); 
            height: 30px;
            margin: 0px;
            border: 1px solid lightgrey;
            ">`)
                .html(data.data1))
        }
    }
}
window.customElements.define("group1-result-item", Group1ResultItem, {extends: 'div'});
window.customElements.define("group2-result-item", Group2ResultItem, {extends: 'div'});
window.customElements.define("group3-result-item", Group3ResultItem, {extends: 'span'});

let resultItems = {
    group1: Group1ResultItem,
    group2: Group2ResultItem,
    group3: Group3ResultItem,
}

class ResultTab extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        $(this).html(template.content.cloneNode(true));

        $(this).find('.result-splitter').jqxSplitter({
            theme: '',
            width: 'calc(100% - 4px)',
            height: 'calc(100% - 2px)',
            // height: 200
            panels: [{ size: '40%', max: 1000, min: 50 }, { size: '60%', max: 2000 }],
        }).on('resize', () => {
            $(this).find('#reultList').jqxListBox('render');
        });

        let source = [
            {label: 'item1', value: {data1: 'data1', type: 'group1'}, group: "group1" },
            {label: 'item1', value: {data1: 'data2', type: 'group1'}, group: "group1" },
            {label: 'item1', value: {data1: 'data3', type: 'group1'}, group: "group1" },
            {label: 'item1', value: {data1: 'data4', type: 'group2'}, group: "group2" },
            {label: 'item1', value: {data1: 'data5', type: 'group2'}, group: "group2" },
            {label: 'item1', value: {data1: 'data6', type: 'group2'}, group: "group2" },
            {label: 'item1', value: {data1: 'data7', type: 'group3'}, group: "group3" },
            {label: 'item1', value: {data1: 'data8', type: 'group3'}, group: "group3" },
            {label: 'item1', value: {data1: 'data9', type: 'group3'}, group: "group3" },
        ];

        $(this).find('#reultList').jqxListBox({
            theme: window.jqxTheme,
            width: '100%',
            height: '100%',
            source: source,
            renderer: (index, label, value) => {
                console.log(index, label, value);

                if (index >= 0) {
                    let ri = new resultItems[value.type](value, $(this).find('#reultList').width());
                    return ri.outerHTML;
                }
                else return label
            },
        });
    }
}

window.customElements.define("result-tab", ResultTab);
export default ResultTab