$(document).ready(function () {
    $("#ecs-fields").DataTable({
        "ajax": {
            "url": "./ecs-fields.json?v=8.11",
            "dataSrc": ""
        },
        "paging": true,
        "pageLength": 500,
        "responsive": true,
        "fixedHeader": true,
        "language": {
            "info": "Showing _END_ fields",
            "infoEmpty": "No fields found",
            "infoFiltered": "(filtered from _MAX_ total fields)"
        },
        "order": [[1, "asc"]],
        "columns": [
            { "data": "fieldName", "title": "Field Name" },
            { "data": "fieldSet", "title": "Field Set" },
            { "data": "fieldLevel", "title": "Field Level" },
            { "data": "fieldDescription", "title": "Field Description", "orderable": false, "searchable": false }
        ]
    });
});
