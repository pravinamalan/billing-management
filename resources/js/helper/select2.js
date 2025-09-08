function customSelect2(customClass = ''){

    $.fn.select2.amd.define('CustomSelectionAdapter', [
        "select2/utils",
        "select2/selection/multiple",
        "select2/selection/placeholder",
        "select2/selection/eventRelay",
        "select2/selection/single",
    ],
    function(Utils, MultipleSelection, Placeholder, EventRelay, SingleSelection) {
        let adapter = Utils.Decorate(MultipleSelection, Placeholder);

        adapter = Utils.Decorate(adapter, EventRelay);

        adapter.prototype.render = function() {

        let $selection = SingleSelection.prototype.render.call(this);
            return $selection;
        };

        adapter.prototype.update = function(data) {
        this.clear();
        let $rendered = this.$selection.find('.select2-selection__rendered');
        let noItemsSelected = data.length === 0;
        let formatted = "";

        if (noItemsSelected) {
            formatted = `<span style="color:#6c757d;font-size:13px;">${this.options.get("placeholder")}</span>` || "";
            $rendered.prop('title', this.options.get("placeholder"));
        } else {
            let itemsData = {
                selected: data || [],
                all: this.$element.find("option") || []
            };

            formatted = this.display(itemsData, $rendered);
            $rendered.prop('title', formatted);
        }
        $rendered.empty().append(formatted);

        };

        return adapter;
    });

    $.fn.select2.amd.define('CustomDropdownAdapter', [
        "select2/utils",
        "select2/dropdown",
        "select2/dropdown/attachBody",
        "select2/dropdown/attachContainer",
        "select2/dropdown/search",
        "select2/dropdown/minimumResultsForSearch",
        "select2/dropdown/closeOnSelect",
    ],
    function(Utils, Dropdown, AttachBody, AttachContainer, Search) {
        let dropdownWithSearch = Utils.Decorate(Dropdown, Search);

        dropdownWithSearch.prototype.render = function() {

            var $rendered = Dropdown.prototype.render.call(this);

            let placeholder = this.options.get("placeholderForSearch") || "";
            var $search = $(
                '<span class="select2-search select2-search--dropdown">' +
                '<input class="select2-search__field" placeholder="' + placeholder + '" type="search"' +
                ' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
                ' spellcheck="false" role="textbox" />' +
                '</span>'
            );

            this.$searchContainer = $search;
            this.$search = $search.find('input');

            $rendered.prepend($search);

            if(customClass)
                $rendered.addClass(customClass);

            return $rendered;
        };

        function SelectAll() { }

        SelectAll.prototype.render = function (decorated) {

            var self = this,
                $rendered = decorated.call(this),
                $selectAll = $(
                    '<button class="btn btn-xs btn-default selectAll" type="button" style="margin-left:6px; padding:1px 5px !important">All</button>'
                ),
                $unselectAll = $(
                    '<button class="btn btn-xs btn-default selectNone" type="button" style="margin-left:6px; padding:1px 5px !important">None</button>'
                ),
                $btnContainer = $('<div style="margin-top:3px;text-align:right;padding:3px;">').append($selectAll).append($unselectAll);

            $rendered.find('.select2-dropdown').prepend($btnContainer);

            $selectAll.on('click', function (e) {
                e.stopPropagation()
                var $results = $rendered.find('.select2-results__option[aria-selected=false]');
                $results.each(function () {
                    self.trigger('select', {
                        data: $(this).data('data')
                    });
                });
                self.trigger('close');
            });
            $unselectAll.on('click', function (e) {
                e.stopPropagation()
                var $results = $rendered.find('.select2-results__option[aria-selected=true]');
                $results.each(function () {
                    self.trigger('unselect', {
                        data: $(this).data('data')
                    });
                });
                self.trigger('close');
            });
            return $rendered;
        };

        return Utils.Decorate(
            Utils.Decorate(

                dropdownWithSearch,
                AttachBody

            ),
            SelectAll
        );

        let adapter = Utils.Decorate(dropdownWithSearch, AttachContainer);
        adapter = Utils.Decorate(adapter, AttachBody);
        return adapter;

    });
    $.fn.select2.amd.define('CustomDropdownAdapterDynamic', [
        "select2/utils",
        "select2/dropdown",
        "select2/dropdown/attachBody",
        "select2/dropdown/attachContainer",
        "select2/dropdown/search",
        "select2/dropdown/minimumResultsForSearch",
        "select2/dropdown/closeOnSelect",
    ],
    function(Utils, Dropdown, AttachBody, AttachContainer, Search) {
        let dropdownWithSearch = Utils.Decorate(Dropdown, Search);

        dropdownWithSearch.prototype.render = function() {

            var $rendered = Dropdown.prototype.render.call(this);

            let placeholder = this.options.get("placeholderForSearch") || "";
            var $search = $(
                '<span class="select2-search select2-search--dropdown">' +
                '<input class="select2-search__field" placeholder="' + placeholder + '" type="search"' +
                ' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
                ' spellcheck="false" role="textbox" />' +
                '</span>'
            );

            this.$searchContainer = $search;
            this.$search = $search.find('input');

            $rendered.prepend($search);
            return $rendered;
        };

        // function SelectAll() { }

        // SelectAll.prototype.render = function (decorated) {

        //     var self = this,
        //         $rendered = decorated.call(this),
        //         $selectAll = $(
        //             '<button class="btn btn-xs btn-default selectAll" type="button" style="margin-left:6px;">All</button>'
        //         ),
        //         $unselectAll = $(
        //             '<button class="btn btn-xs btn-default selectNone" type="button" style="margin-left:6px;">None</button>'
        //         ),
        //         $btnContainer = $('<div style="margin-top:3px;text-align:right;padding:3px;">').append($selectAll).append($unselectAll);

        //     $rendered.find('.select2-dropdown').prepend($btnContainer);

        //     $selectAll.on('click', function (e) {
        //         e.stopPropagation()
        //         var $results = $rendered.find('.select2-results__option[aria-selected=false]');
        //         $results.each(function () {
        //             self.trigger('select', {
        //                 data: $(this).data('data')
        //             });
        //         });
        //         self.trigger('close');
        //     });
        //     $unselectAll.on('click', function (e) {
        //         e.stopPropagation()
        //         var $results = $rendered.find('.select2-results__option[aria-selected=true]');
        //         $('#contactSource').empty().trigger("change.select2");
        //         $results.each(function () {
        //             self.trigger('unselect', {
        //                 data: $(this).data('data')
        //             });
        //         });
        //         self.trigger('close');
        //     });
        //     return $rendered;
        // };

        // return Utils.Decorate(
        //     Utils.Decorate(

        //         dropdownWithSearch,
        //         AttachBody

        //     ),
        //     SelectAll
        // );

        let adapter = Utils.Decorate(dropdownWithSearch, AttachContainer);
        adapter = Utils.Decorate(adapter, AttachBody);
        return adapter;

    });
}

function customSelectV2(AllOption = '-1') {

    $.fn.select2.amd.define('CustomSelectionAdapterV2', [
        "select2/utils",
        "select2/selection/multiple",
        "select2/selection/placeholder",
        "select2/selection/eventRelay",
        "select2/selection/single",
    ],
    function(Utils, MultipleSelection, Placeholder, EventRelay, SingleSelection) {
        let adapter = Utils.Decorate(MultipleSelection, Placeholder);

        adapter = Utils.Decorate(adapter, EventRelay);

        adapter.prototype.render = function() {

        let $selection = SingleSelection.prototype.render.call(this);
            return $selection;
        };

        adapter.prototype.update = function(data) {

        this.clear();

        let $rendered = this.$selection.find('.select2-selection__rendered');
        let noItemsSelected = data.length === 0;
        let formatted = "";

        if (noItemsSelected) {
            formatted = this.options.get("placeholder") || "";
        } else {
            let itemsData = {
                selected: data || [],
                all: this.$element.find("option") || []
            };

            formatted = this.display(itemsData, $rendered);
        }

            $rendered.empty().append(formatted);
            $rendered.prop('title', formatted);
        };

        return adapter;
    });

    $.fn.select2.amd.define('CustomDropdownAdapterV2', [
        "select2/utils",
        "select2/dropdown",
        "select2/dropdown/attachBody",
        "select2/dropdown/attachContainer",
        "select2/dropdown/search",
        "select2/dropdown/minimumResultsForSearch",
        "select2/dropdown/closeOnSelect",
    ],
    function(Utils, Dropdown, AttachBody, AttachContainer, Search) {
        let dropdownWithSearch = Utils.Decorate(Dropdown, Search);

        dropdownWithSearch.prototype.render = function() {

            var $rendered = Dropdown.prototype.render.call(this);

            let placeholder = this.options.get("placeholderForSearch") || "";
            var $search = $(
                '<span class="select2-search select2-search--dropdown">' +
                '<input class="select2-search__field" placeholder="' + placeholder + '" type="search"' +
                ' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
                ' spellcheck="false" role="textbox" />' +
                '</span>'
            );

            this.$searchContainer = $search;
            this.$search = $search.find('input');

            $rendered.prepend($search);
            return $rendered;
        };

        function SelectAll() { }

        SelectAll.prototype.render = function (decorated) {

            var self = this,
                $rendered = decorated.call(this),
                $selectAll = $(
                    '<button class="btn btn-xs btn-default selectAll" type="button" style="margin-left:6px;padding:1px 5px !important">All</button>'
                ),
                $unselectAll = $(
                    '<button class="btn btn-xs btn-default selectNone" type="button" style="margin-left:6px;padding:1px 5px !important">None</button>'
                ),
                $btnContainer = $('<div style="margin-top:3px;text-align:right;padding:3px;">').append($selectAll).append($unselectAll);

            $rendered.find('.select2-dropdown').prepend($btnContainer);

            $selectAll.on('click', function (e) {
                e.stopPropagation()
                var $results = $rendered.find('.select2-results__option');

                $results.each(function () {

                    if($(this).data('data').id == AllOption)
                        self.trigger('select', {
                            data: $(this).data('data')
                        });
                    else {
                        self.trigger('unselect', {
                            data: $(this).data('data')
                        });
                    }
                });
                self.trigger('close');
            });
            $unselectAll.on('click', function (e) {
                e.stopPropagation()
                var $results = $rendered.find('.select2-results__option[aria-selected=true]');
                $results.each(function () {
                    self.trigger('unselect', {
                        data: $(this).data('data')
                    });
                });
                self.trigger('close');
            });
            return $rendered;
        };

        return Utils.Decorate(
            Utils.Decorate(

                dropdownWithSearch,
                AttachBody

            ),
            SelectAll
        );

        let adapter = Utils.Decorate(dropdownWithSearch, AttachContainer);
        adapter = Utils.Decorate(adapter, AttachBody);
        return adapter;

    });
}

export { customSelect2, customSelectV2 }
