function initDataTable() {
    var PAGE_HEAD_HEIGHT = 195;

    $("#ecs-fields").DataTable({
        "ajax": {
            "url": "./ecs-fields.json?v=8.13",
            "dataSrc": ""
        },
        "paging": true,
        "pageLength": 500,
        "lengthMenu": [10, 25, 50, 100, 500],
        "responsive": true,
        "scrollY": $(document).height() - PAGE_HEAD_HEIGHT,
        "language": {
            "info": "Showing _START_ to _END_ fields (from _MAX_ total fields)",
            "infoEmpty": "No matching fields found",
            "zeroRecords": "No matching fields found",
            "infoFiltered": "",
            "lengthMenu": "Show _MENU_ fields"
        },
        "order": [[1, "asc"]],
        "columns": [
            { "data": "fieldName", "title": "Field Name" },
            { "data": "fieldSet", "title": "Field Set" },
            { "data": "fieldLevel", "title": "Field Level" },
            { "data": "fieldDescription", "title": "Field Description", "orderable": false, "searchable": false }
        ]
    });
}

$(initDataTable);
