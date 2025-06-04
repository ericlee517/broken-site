const pagination = require("hexo-pagination");
hexo.extend.generator.register("all_archive", function (locals) {
    return pagination("all_archive", locals.posts, {
        perPage: 10,
        current: 1,
        format: "page/%d/",
        layout: "all_archive",
    });
});