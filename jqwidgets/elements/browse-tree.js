let template = document.createElement('template');

template.innerHTML = `
<style>
browse-tree #container {
    /*background-color: yellow;*/
    /*display: grid;*/
    /*grid-auto-rows: auto 50px;*/
    height: 100%;
}
browse-tree #barContainer {
    background-color: yellow;
}
</style>
<div id="container">
    <!--<div id="listContainer"></div>-->
    <!--<div id="barContainer"></div>-->
</div>
`;

class BrowseTree extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('BrowseTree connected');

        $(this).html($(template.content.cloneNode(true)));

        let container = $(this).find('#container');
        console.log("CONTAINER", container);

        let source = [
            {html: "<div class='item-entry'>item 1</div>", title: "item 1", group: "item Group 1" },
            {html: "<div class='item-entry'>item 2</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 3</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 4</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 5</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 6</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 7</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 8</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 9</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 10</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 11</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 12</div>", title: "item 2", group: "item Group 1" },
            {html: "<div class='item-entry'>item 13</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 14</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 15</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 16</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 17</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 18</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 19</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 20</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 22</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 23</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 24</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 25</div>", title: "item 3", group: "item Group 2" },
            {html: "<div class='item-entry'>item 26</div>", title: "item ...", group: "item Group 2" },
            {html: "<div class='item-entry'>item 27</div>", title: "item ...", group: "item Group 2" },
            {html: "<div class='item-entry'>item 28</div>", title: "item ...", group: "item Group 2" },
            {html: "<div class='item-entry'>item 29</div>", title: "item ...", group: "item Group 2" },
            {html: "<div class='item-entry'>item 30</div>", title: "item ...", group: "item Group 2" },
            {html: "<div class='item-entry'>item 31</div>", title: "item ...", group: "item Group 2" },
            {html: "<div class='item-entry'>item 32</div>", title: "item ...", group: "item Group 2" },
        ];

        this.lb = $('<div>')
            .jqxListBox({ source: source, width: '100%', height: $('#btTab').height(), theme: window.jqxTheme})
            // .jqxListBox({ source: source, width: '100%', height: container.height()-50, theme: window.jqxTheme})
            .addClass('jqx-hideborder')
            // .addClass('bt-list-box')
            .on('select', event => {
                console.log('selected', event.args.item.label);
                $(this).trigger('itemSelected', event.args.item.label);
            });

        // this.lb.jqxListBox('height', '90%');

        container.append(this.lb);
        this.lb.jqxListBox('selectIndex', 0);
    }

    update() {
        console.log('updateing');
        this.lb.jqxListBox('height', $('#btTab').height());
    }

    focusOnTree() {
        console.log('focusing');
        this.lb.focus();
        console.log("HHHHHHHHHHHHHHHHH", $('#btTab').height());
        this.lb.jqxListBox('height', $('#btTab').height());
        this.lb.jqxListBox();

    }
}

window.customElements.define('browse-tree', BrowseTree);

export default BrowseTree;