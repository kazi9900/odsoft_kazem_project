"use strict";
exports.__esModule = true;
exports.DownloadSettignsViewModel = void 0;
var DownloadSettignsViewModel = /** @class */ (function () {
    function DownloadSettignsViewModel(registo) {
        this.copyFrom(registo);
    }
    DownloadSettignsViewModel.prototype.copyFrom = function (registo) {
        if (registo) {
            this.maxSentencesPerDownload = registo.maxSentencesPerDownload;
            this.maxSentencesPerUser = registo.maxSentencesPerUser;
            this.maxSentencesL1L2 = registo.maxSentencesL1L2;
            this.maxDownloadsPerUser = registo.maxDownloadsPerUser;
        }
    };
    return DownloadSettignsViewModel;
}());
exports.DownloadSettignsViewModel = DownloadSettignsViewModel;
