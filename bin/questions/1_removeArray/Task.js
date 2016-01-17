'use strict';

var Base = require('../../libs/Base');

var Question = Base.extend({
    id: 'removeArray',
    name: '请尝试删除数组的指定下标对应的元素',
    position: 1,
    prepare: function() {
        var path = require('path');
        var index = path.resolve(process.cwd(), this.id, 'index.js');
        if (this.fileExist(index)) {
            return;
        }
        this.copyFile(path.resolve(__dirname, 'index.js'), index);
    }
});


module.exports = Question;