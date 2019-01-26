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

class Group1ResultItem extends HTMLSpanElement {

    constructor(data) {
        super();

        if (data) {
            console.log(data);

            $(this).html($(`<div style="
            width: calc(100% - 10px); 
            height: 100px;
            margin: 0px;
            border: 1px solid lightgrey;
            ">`)
                .html(data.data1))
        }
    }
}
class Group2ResultItem extends HTMLSpanElement {

    constructor(data) {
        super();

        if (data) {
            console.log(data);

            $(this).html($(`<div style="
            width: calc(100% - 10px); 
            height: 50px;
            margin: 0px;
            border: 1px solid lightgrey;
            ">`)
                .html(data.data1))
        }
    }
}
class Group3ResultItem extends HTMLSpanElement {

    constructor(data) {
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
window.customElements.define("group1-result-item", Group1ResultItem, {extends: 'span'});
window.customElements.define("group2-result-item", Group2ResultItem, {extends: 'span'});
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
                    let ri = new resultItems[value.type](value);
                    return ri.outerHTML;
                }
                else return label
            },
        });
    }
}

window.customElements.define("result-tab", ResultTab);
export default ResultTab