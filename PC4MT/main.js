(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Ld9":
/*!*******************************************************************************!*\
  !*** ./src/app/signin-signup/signup-form/viewmodels/userRegistryViewModel.ts ***!
  \*******************************************************************************/
/*! exports provided: UserRegisterViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterViewModel", function() { return UserRegisterViewModel; });
class UserRegisterViewModel {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AppW\Emanuel09-tmdei_2020_1150808_emanuel-9ad2d3ca08d8\Emanuel09-tmdei_2020_1150808_emanuel-9ad2d3ca08d8\PC4MT\Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "4Vrr":
/*!************************************************************************************!*\
  !*** ./src/app/maintenance/maintenance-projects/maintenance-projects.component.ts ***!
  \************************************************************************************/
/*! exports provided: MaintenanceProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceProjectsComponent", function() { return MaintenanceProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../viewmodels/projectUserViewModel */ "q0+R");
/* harmony import */ var _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewmodels/projectViewModel */ "uXFV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/maintenance.service */ "T59Z");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















const _c0 = function (a0) { return { "lista-item-selected": a0 }; };
function MaintenanceProjectsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceProjectsComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const project_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSelectItem(project_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx_r0.currentProject === project_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r2 == null ? null : project_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r2 == null ? null : project_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 5, project_r2 == null ? null : project_r2.language1Id, ctx_r0.getLanguageName, ctx_r0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 9, project_r2 == null ? null : project_r2.language2Id, ctx_r0.getLanguageName, ctx_r0), " ");
} }
function MaintenanceProjectsComponent_div_22_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.Message.RequiredField"), " ");
} }
function MaintenanceProjectsComponent_div_22_ng_container_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.Message.RequiredField"), " ");
} }
function MaintenanceProjectsComponent_div_22_ng_container_1_div_41_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10 == null ? null : (tmp_0_0 = item_r10.get("userName")) == null ? null : tmp_0_0.value);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function MaintenanceProjectsComponent_div_22_ng_container_1_div_41_dx_select_box_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dx-select-box", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "functionCall");
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r13.listUsers, i_r11), ctx_r13.filterUsers, ctx_r13));
} }
function MaintenanceProjectsComponent_div_22_ng_container_1_div_41_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceProjectsComponent_div_22_ng_container_1_div_41_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.removeProjectUser(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MaintenanceProjectsComponent_div_22_ng_container_1_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MaintenanceProjectsComponent_div_22_ng_container_1_div_41_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MaintenanceProjectsComponent_div_22_ng_container_1_div_41_dx_select_box_4_Template, 2, 8, "dx-select-box", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dx-check-box", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dx-check-box", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MaintenanceProjectsComponent_div_22_ng_container_1_div_41_button_10_Template, 2, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10 == null ? null : (tmp_1_0 = item_r10.get("userName")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r10 == null ? null : (tmp_2_0 = item_r10.get("userName")) == null ? null : tmp_2_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r10 == null ? null : (tmp_3_0 = item_r10.get("userName")) == null ? null : tmp_3_0.value));
} }
function MaintenanceProjectsComponent_div_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "dx-select-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaintenanceProjectsComponent_div_22_ng_container_1_div_19_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "dx-select-box", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MaintenanceProjectsComponent_div_22_ng_container_1_div_26_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "dx-check-box", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceProjectsComponent_div_22_ng_container_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.addProjectUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, MaintenanceProjectsComponent_div_22_ng_container_1_div_41_Template, 11, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceProjectsComponent_div_22_ng_container_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceProjectsComponent_div_22_ng_container_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Name", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Description", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Language 1", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](18, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](26, _c1, ctx_r6.listLanguages, ctx_r6.form == null ? null : ctx_r6.form.controls == null ? null : ctx_r6.form.controls.language2Id == null ? null : ctx_r6.form.controls.language2Id.value), ctx_r6.removeLanguage, ctx_r6))("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted && ctx_r6.form.get("language1Id").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Language 2", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](25, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c1, ctx_r6.listLanguages, ctx_r6.form == null ? null : ctx_r6.form.controls == null ? null : ctx_r6.form.controls.language1Id == null ? null : ctx_r6.form.controls.language1Id.value), ctx_r6.removeLanguage, ctx_r6))("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted && ctx_r6.form.get("language2Id").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Active", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Users", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx_r6.form == null ? null : ctx_r6.form.controls["projectUsers"].valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 24, "SHARED.Label.Add"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.formArrayProjectUsersControls());
} }
function MaintenanceProjectsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaintenanceProjectsComponent_div_22_ng_container_1_Template, 49, 32, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isBusy && ctx_r1.form);
} }
let MaintenanceProjectsComponent = class MaintenanceProjectsComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(formBuilder, toastr, maintenanceService, spinner) {
        super();
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.maintenanceService = maintenanceService;
        this.spinner = spinner;
        this.listLanguages = [];
        this.listUsers = [];
        this.currentProject = null;
        this.popupVisible = false;
        this.isFormSubmitted = false;
    }
    formArrayProjectUsersControls() {
        return this.form.get('projectUsers').controls;
    }
    ngOnInit() {
        this.loadDados();
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    addProjectUser() {
        const newFormGroup = this.formBuilder.group({
            userId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userName: [null],
            projectId: [null],
            isprojectOwner: [null],
            isAutorized: [true],
        });
        this.form.controls.projectUsers.insert(0, newFormGroup);
        if (this.form.controls.projectUsers.length > 1) {
            this.form.get('projectUsers.1.userId').disable();
        }
    }
    removeProjectUser(index) {
        this.form.controls.projectUsers.controls.splice(index, 1);
        this.form.controls.projectUsers.updateValueAndValidity();
        if (this.form.controls.projectUsers.length > 0) {
            this.form.get('projectUsers.0.userId').enable();
        }
        this.listUsers = this.listUsers.slice();
    }
    onAddProject() {
        const newProject = new _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_7__["ProjectViewModel"]();
        this.onSelectItem(newProject);
    }
    onSelectItem(project) {
        this.isFormSubmitted = false;
        this.currentProject = project;
        this.initializeForm();
        this.popupVisible = true;
    }
    onCancel() {
        this.popupVisible = false;
        this.form = null;
        this.currentProject = null;
    }
    onSave() {
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            const registo = new _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_7__["ProjectViewModel"]();
            registo.id = this.form.get('id').value;
            registo.name = this.form.get('name').value;
            registo.description = this.form.get('description').value;
            registo.language1Id = this.form.get('language1Id').value;
            registo.language2Id = this.form.get('language2Id').value;
            registo.active = this.form.get('active').value;
            registo.userCreationId = this.form.get('userCreationId').value;
            registo.dateCreation = this.form.get('dateCreation').value;
            registo.userChangeId = this.form.get('userChangeId').value;
            registo.dateChange = this.form.get('dateChange').value;
            registo.projectUsers = this.formArrayProjectUsersControls().map(x => {
                const projectUser = new _viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_6__["ProjectUserViewModel"]();
                projectUser.userId = x.get('userId').value;
                projectUser.projectId = x.get('projectId').value;
                projectUser.isAutorized = x.get('isAutorized').value;
                projectUser.isprojectOwner = x.get('isprojectOwner').value;
                return projectUser;
            });
            if (this.currentProject && this.currentProject.id) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateProject(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.currentProject.copyFrom(response);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentProject = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao atualizar o projecto');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertProject(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.currentProject = new _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_7__["ProjectViewModel"](response);
                    this.listProjects.push(this.currentProject);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentProject = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao inserir novo projecto');
                });
            }
        }
    }
    getLanguageName(id) {
        const language = this.listLanguages.find(x => x.id === id);
        return language ? language.name : '';
    }
    filterUsers([users, index]) {
        if (!users) {
            return [];
        }
        const usersSelected = this.form.get('projectUsers').controls.map(x => x.get('userId').value);
        usersSelected.splice(index, 1);
        return users.filter(x => !usersSelected.includes(x.id));
    }
    removeLanguage([languagesList, languageId]) {
        if (languagesList) {
            return languagesList.filter(x => x.id !== languageId);
        }
        return [];
    }
    loadDados() {
        this.spinner.show();
        this.incrementIsBusy();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            this.maintenanceService.getLanguages(),
            this.maintenanceService.getUsersLight()
        ])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(([languages, users]) => {
            this.listLanguages = languages;
            this.listUsers = users;
            this.loadRegistos();
            this.decrementIsBusy();
            this.spinner.hide();
        }, () => {
            this.decrementIsBusy();
            this.spinner.hide();
            this.toastr.error('Erro ao carregar dados');
        });
    }
    loadRegistos() {
        this.incrementIsBusy();
        this.maintenanceService.getProjects()
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.listProjects = response;
            this.decrementIsBusy();
        }, () => {
            this.decrementIsBusy();
            this.toastr.error('Erro ao carregar registos');
        });
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            id: [this.currentProject.id],
            name: [this.currentProject.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [this.currentProject.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            language1Id: [this.currentProject.language1Id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            language2Id: [this.currentProject.language2Id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            active: [this.currentProject.active],
            userCreationId: [this.currentProject.userCreationId],
            dateCreation: [this.currentProject.dateCreation],
            userChangeId: [this.currentProject.userChangeId],
            dateChange: [this.currentProject.dateChange],
            projectUsers: this.formBuilder.array(this.currentProject.projectUsers.map(u => this.formBuilder.group({
                userId: [u.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                userName: [u.userName],
                projectId: [u.projectId],
                isprojectOwner: [u.isprojectOwner],
                isAutorized: [u.isAutorized],
            }))),
        });
    }
};
MaintenanceProjectsComponent.ɵfac = function MaintenanceProjectsComponent_Factory(t) { return new (t || MaintenanceProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_maintenance_service__WEBPACK_IMPORTED_MODULE_9__["MaintenanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"])); };
MaintenanceProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintenanceProjectsComponent, selectors: [["app-maintenance-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 17, consts: [[1, "btn", "btn-primary", "position-absolute", "btn-add", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-square"], [1, "w-100", "h-100"], [1, "p-scroll"], [1, "row", "m-0", "border-bottom", "bg-white", "lista-row-header"], [1, "col-3", "d-flex", "align-items-center", "border-right"], [1, "container-list", "bg-white", "position-relative"], ["class", "row m-0 border-bottom lista-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "row", "m-0", "border-bottom", "lista-item", 3, "ngClass", "click"], [1, "col-3", "d-flex", "align-items-center"], [4, "ngIf"], [1, "container-form", 3, "formGroup"], ["direction", "vertical"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], [1, "col-4"], [1, "col-8"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["valueExpr", "id", "displayExpr", "name", "placeholder", "Selecionar", "formControlName", "language1Id", 1, "form-control", 3, "dataSource", "showClearButton"], ["class", "alert alert-danger mt-1 mb-0 p-1", 4, "ngIf"], ["valueExpr", "id", "displayExpr", "name", "placeholder", "Selecionar", "formControlName", "language2Id", 1, "form-control", 3, "dataSource", "showClearButton"], ["formControlName", "active", "text", "Yes", 1, "container-check", "w-100"], [1, "col-12", "form-group"], [1, "border"], [1, "col-12", "d-flex", "align-items-center", "p-2"], [1, "m-0"], ["type", "button", 1, "btn", "btn-outline-primary", "ml-auto", 3, "disabled", "click"], ["formArrayName", "projectUsers"], ["class", "list-item border-top", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], [1, "col-6"], [1, "btn", "btn-danger", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "alert", "alert-danger", "mt-1", "mb-0", "p-1"], [1, "list-item", "border-top", 3, "formGroupName"], [1, "d-flex", "align-items-center", "justify-content-center", "p-2"], [1, "col-5", "pl-0"], ["class", "form-control", "valueExpr", "id", "displayExpr", "name", "placeholder", "Selecionar", "formControlName", "userId", 3, "dataSource", 4, "ngIf"], [1, "col-3"], ["formControlName", "isprojectOwner", "text", "Project Owner"], ["formControlName", "isAutorized", "text", "Autorized"], [1, "col-1", "pr-0"], ["type", "button", "class", "btn btn-outline-danger w-100", 3, "click", 4, "ngIf"], ["valueExpr", "id", "displayExpr", "name", "placeholder", "Selecionar", "formControlName", "userId", 1, "form-control", 3, "dataSource"], ["type", "button", 1, "btn", "btn-outline-danger", "w-100", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"]], template: function MaintenanceProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceProjectsComponent_Template_button_click_0_listener() { return ctx.onAddProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaintenanceProjectsComponent_div_19_Template, 11, 15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ngx-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "dx-popup", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MaintenanceProjectsComponent_Template_dx_popup_visibleChange_21_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MaintenanceProjectsComponent_div_22_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Add", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Language 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Language 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", "Project Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", "60%")("height", "90%")("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxScrollViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxCheckBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]], pipes: [_shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_14__["FunctionCallPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: [".container-list[_ngcontent-%COMP%] {\n  height: calc(100% - 49px);\n  overflow-y: scroll;\n}\n\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.container-form[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n\n.lista-row-header[_ngcontent-%COMP%] {\n  border-left: 2px solid white;\n  height: 49px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  top: 118px;\n}\n\n.container-check[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWludGVuYW5jZS1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6Im1haW50ZW5hbmNlLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OXB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jb250YWluZXItZm9ybSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZmZmNztcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThkYzg7XG4gIGJhY2tncm91bmQ6ICNlNmZmZjc7XG59XG5cbi5saXN0YS1yb3ctaGVhZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgaGVpZ2h0OiA0OXB4O1xufVxuXG4uYnRuLWFkZCB7XG4gIHRvcDogMTE4cHg7XG59XG5cbi5jb250YWluZXItY2hlY2sge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4iXX0= */"] });
MaintenanceProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], MaintenanceProjectsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaintenanceProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maintenance-projects',
                templateUrl: './maintenance-projects.component.html',
                styleUrls: ['./maintenance-projects.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_9__["MaintenanceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "4pUk":
/*!**********************************!*\
  !*** ./src/environments/.env.ts ***!
  \**********************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
const env = {
    npm_package_version: '0.0.0'
};


/***/ }),

/***/ "59tN":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/credentials.service */ "DR2l");




/**
 * Adds a default error handler to all requests.
 */
class TokenInterceptor {
    constructor(credentialsService) {
        this.credentialsService = credentialsService;
    }
    intercept(request, next) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        if (this.credentialsService.getCredentials != null) {
            headers = this.getAuthenticationHeader(headers);
        }
        request = request.clone({ headers });
        return next.handle(request);
    }
    getAuthenticationHeader(headers) {
        const authToken = this.credentialsService.getCredentials.token;
        if (!authToken) {
            return headers;
        }
        const authHeader = `Bearer ${authToken}`;
        return headers.append('Authorization', authHeader);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"] }]; }, null); })();


/***/ }),

/***/ "7zW1":
/*!*************************************************************!*\
  !*** ./src/app/maintenance/viewmodels/userRoleViewModel.ts ***!
  \*************************************************************/
/*! exports provided: UserRoleViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleViewModel", function() { return UserRoleViewModel; });
class UserRoleViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.userId = registo.userId;
            this.roleId = registo.roleId;
            this.roleName = registo.roleName;
        }
    }
}


/***/ }),

/***/ "8B9z":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authentication.service */ "y8gV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ "384S");












function NavBarComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onOpenPage("signin-signup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NavBarComponent.Label.SignInSignUp"));
} }
function NavBarComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NavBarComponent.Label.SignOut"));
} }
function NavBarComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onOpenPage("profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NavBarComponent.Label.Profile"));
} }
function NavBarComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onOpenPage("maintenance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "NavBarComponent.Label.Maintenance"));
} }
let NavBarComponent = class NavBarComponent {
    constructor(authenticationService, router, credentialsService, translateService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.credentialsService = credentialsService;
        this.translateService = translateService;
        this.currentLanguage = this.translateService.currentLang || 'en';
        this.currentLanguageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.currentLanguage);
        this.languages = [
            { id: 'en', descr: 'En' },
            { id: 'pt', descr: 'Pt' }
        ];
        this.translateService.onLangChange
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((langChangeEvent) => {
            this.currentLanguage = langChangeEvent.lang;
            this.currentLanguageControl.setValue(this.currentLanguage, { emitEvent: false });
        });
        this.currentLanguageControl.valueChanges
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            this.currentLanguage = value;
            this.translateService.use(value);
        });
    }
    onOpenPage(opt) {
        switch (opt) {
            case 'home':
                this.router.navigate(['/'], { replaceUrl: true });
                break;
            case 'contribute':
                this.router.navigate(['/contribute/translate'], { replaceUrl: true });
                break;
            case 'signin-signup':
                this.router.navigate(['/signin-signup'], { replaceUrl: true });
                break;
            case 'profile':
                this.router.navigate(['/profile'], { replaceUrl: true });
                break;
            case 'maintenance':
                this.router.navigate(['/maintenance'], { replaceUrl: true });
                break;
            default:
                break;
        }
    }
    signOut() {
        this.authenticationService.logout()
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(() => {
            this.router.navigate(['/'], { replaceUrl: true });
        });
    }
};
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_6__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 19, consts: [[1, "nav-img"], ["src", "../assets/img/logo.png", "alt", ""], [1, "nav-logo"], [1, "nav-links-container", "d-flex", "align-items-center"], [1, "nav-link", 3, "click"], ["class", "nav-link", 3, "click", 4, "ngIf"], ["displayExpr", "descr", "valueExpr", "id", 1, "border-0", "rounded-0", 3, "dataSource", "formControl", "showDropDownButton", "width"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_7_listener() { return ctx.onOpenPage("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_10_listener() { return ctx.onOpenPage("contribute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavBarComponent_a_13_Template, 3, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavBarComponent_a_14_Template, 3, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavBarComponent_a_15_Template, 3, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavBarComponent_a_16_Template, 3, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "dx-select-box", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, "Gloss Loader"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 15, "NavBarComponent.Label.Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 17, "NavBarComponent.Label.Contribute"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.credentialsService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.credentialsService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.credentialsService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.credentialsService.isAuthenticated() && ctx.credentialsService.isRootOrAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", "#7FDBFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.languages)("formControl", ctx.currentLanguageControl)("showDropDownButton", false)("width", 35);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_9__["DxSelectBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #001f3f !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2ECC40;\n}\n.scrollbar-trach-white[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #39CCCC !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #85144b;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #001f3f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #7FDBFF;\n}\n.p-scroll[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.pr-scroll[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #DDDDDD;\n}\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198DC8;\n  background: #DDDDDD;\n}\n.container-body-popup[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  height: 110px;\n  top: 0;\n  left: 0%;\n  right: 0;\n  padding: 0 6%;\n  background-color: #1f1dfb;\n  opacity: 0.5;\n}\n.nav-img[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  height: 110px;\n  top: 1px;\n  left: -5%;\n  right: 0;\n  padding: 0 6%;\n  background-color: white;\n  opacity: 0.5;\n  background-size: cover;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  justify-content: flex-start;\n  top: 50%;\n  left: 190px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  transform: translateY(-50%);\n  font-size: 50px;\n  letter-spacing: 1px;\n  font-weight: 900;\n  color: #001f3f;\n  transition: 0.2s ease;\n  cursor: default;\n}\n.nav-links-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 6%;\n  transform: translateY(-50%);\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  color: #3D9970;\n  font-size: 20px;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: 600;\n  font-style: inherit;\n  padding: 0 10px;\n  transition: 0.4s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  text-decoration: overline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFDRSxvQ0FBQTtBQ0FGO0FER0E7RUFDRSxVQUFBO0FDQUY7QURHQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0FGO0FER0E7RUFDRSw4QkFBQTtBQ0FGO0FER0EsV0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUNBRjtBREdBLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0FGO0FESUE7RUFDRSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSx1QkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUEsY0FBQTtBQWtCQSxpQkFBQTtBQUNBO0VBQ0UsZ0JBWGtCO0VBWWxCLG9CQUFBO0VBQ0Esa0NBQUE7QUNsQkY7QURxQkE7RUFDRSxtQkF4QmE7QUNNZjtBRHFCQTtFQUNFLDhCQUFBO0VBQ0EsbUJBN0JhO0FDV2Y7QURxQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDbEJGO0FEcUJBO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDbEJGO0FBcEVBO0VBQ0UsZUFBQTtFQUNBLFlEdURjO0VDdERkLGFEbURlO0VDbERmLE1BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUF1RUY7QUFyRUE7RUFDRSxlQUFBO0VBQ0EsWUQ0Q2M7RUMzQ2QsYUR3Q2U7RUN2Q2YsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBd0VGO0FBckVBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esd0VBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQXdFRjtBQXJFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQXdFRjtBQXJFQTtFQUNFLHdFQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBd0VGO0FBckVBO0VBQ0UseUJBQUE7QUF3RUYiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmM2YgIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzJFQ0M0MDtcbn1cblxuLnNjcm9sbGJhci10cmFjaC13aGl0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMzlDQ0NDICFpbXBvcnRhbnQ7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4NTE0NGI7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDFmM2Y7XG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM3RkRCRkY7XG59XG5cbi5wLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLyogVmFyaWFibGVzICovXG4vLyBDb2xvcidzXG4kc2VsZWN0LWNvbG9yOiAjREREREREO1xuJHNlbGVjdC1ib3JkZXItY29sb3I6ICMxOThEQzg7XG5cblxuLy8gSGVpZ2h0J3NcbiRoZWlnaHQtYnRuOiAzOHB4O1xuJGhlaWdodC1pbnB1dDogMzJweDtcbiRoZWlnaHQtbGlzdGEtaXRlbTogNTBweDtcbiRoZWlnaHQtbmF2LWJhcjogMTEwcHg7XG4kaGVpZ2h0LWxpc3QtcmVzcG9uc2l2ZTogNDAwcHg7XG5cbiRpbmRleC1uYXYtYmFyOiAxMDA7XG5cbiRwLTE6IDRweDtcbiRwLTI6IDhweDtcblxuLyogTGlzdHMgU3R5bGVzICovXG4ubGlzdGEtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQtbGlzdGEtaXRlbTtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogJHNlbGVjdC1jb2xvcjtcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRzZWxlY3QtYm9yZGVyLWNvbG9yO1xuICBiYWNrZ3JvdW5kOiAkc2VsZWN0LWNvbG9yO1xufVxuXG4uY29udGFpbmVyLWJvZHktcG9wdXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWYzZiAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMkVDQzQwO1xufVxuXG4uc2Nyb2xsYmFyLXRyYWNoLXdoaXRlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICMzOUNDQ0MgIWltcG9ydGFudDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg1MTQ0Yjtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMWYzZjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM3RkRCRkY7XG59XG5cbi5wLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLyogVmFyaWFibGVzICovXG4vKiBMaXN0cyBTdHlsZXMgKi9cbi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0RERERERDtcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThEQzg7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG59XG5cbi5jb250YWluZXItYm9keS1wb3B1cCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wb3B1cC1idXR0b25zIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5hdi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwJTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgNiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjFkZmI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm5hdi1pbWcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IC01JTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgNiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5uYXYtbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTkwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogIzAwMWYzZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uYXYtbGlua3MtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDYlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5uYXYtbGluayB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0Q5OTcwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XG59Il19 */"] });
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], NavBarComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_6__["CredentialsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "9LNH":
/*!****************************************************************************!*\
  !*** ./src/app/signin-signup/signin-form/viewmodels/userLoginViewModel.ts ***!
  \****************************************************************************/
/*! exports provided: UserLoginViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginViewModel", function() { return UserLoginViewModel; });
class UserLoginViewModel {
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 9, consts: [[1, "container-home"], [1, "w-100", "text-center", "title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "HomeComponent.Message.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "HomeComponent.Message.DescriptionPart1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "HomeComponent.Message.DescriptionPart2"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".container-home[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-bottom: 30px;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-display: initial;\n  font-size-adjust: initial;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  padding-top: 100px;\n  font-style: italic;\n  margin-bottom: 50px;\n  font-size: 45px;\n  color: #FF851B;\n  opacity: 0.8;\n  transform: initial;\n}\n\narticle[_ngcontent-%COMP%] {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  margin-top: 30px;\n  color: wheat;\n  opacity: 0.8;\n  text-align: justify;\n  font-size: 22px;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx3RUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXItaG9tZSB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZGlzcGxheTogaW5pdGlhbDtcbiAgZm9udC1zaXplLWFkanVzdDppbml0aWFsO1xuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGNvbG9yOiAjRkY4NTFCO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuYXJ0aWNsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IHdoZWF0O1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMjJweDsgIFxuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.env */ "4pUk");

const environment = {
    production: false,
    hmr: true,
    version: _env__WEBPACK_IMPORTED_MODULE_0__["env"].npm_package_version + '-dev',
    serverUrl: 'https://localhost:44350/api/',
    serverUrlNotification: 'https://localhost:44350/pc4mthub/',
    defaultLanguage: 'pt-PT',
    supportedLanguages: ['pt-PT'],
};
//https://localhost:44350/swagger/index.html
//serverUrl: 'https://localhost:44350/api/',
// serverUrlNotification: 'https://localhost:44350/pc4mthub/',


/***/ }),

/***/ "DR2l":
/*!******************************************************!*\
  !*** ./src/app/core/services/credentials.service.ts ***!
  \******************************************************/
/*! exports provided: CredentialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsService", function() { return CredentialsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/roleEnum */ "f44z");



const credentialsKey = 'credentials';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    constructor() {
        this.credentials = null;
        this.currentUser = null;
        const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.credentials = JSON.parse(savedCredentials);
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.getCredentials;
    }
    isRootOrAdmin() {
        return this.getCredentials && this.getCredentials.roleId &&
            (this.getCredentials.roleId === _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_1__["RoleEnum"].Root || this.getCredentials.roleId === _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_1__["RoleEnum"].Admin);
    }
    isEditor() {
        return this.getCredentials && this.getCredentials.roleId && (this.getCredentials.roleId === _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_1__["RoleEnum"].Root ||
            this.getCredentials.roleId === _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_1__["RoleEnum"].Admin || this.getCredentials.roleId === _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_1__["RoleEnum"].Editor);
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get getCredentials() {
        return this.credentials;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials, remember) {
        this.credentials = credentials || null;
        if (credentials) {
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
            this.currentUser = null;
        }
    }
}
CredentialsService.ɵfac = function CredentialsService_Factory(t) { return new (t || CredentialsService)(); };
CredentialsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CredentialsService, factory: CredentialsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CredentialsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "F/X4":
/*!******************************************************************!*\
  !*** ./src/app/contribute/search/contribute-search.component.ts ***!
  \******************************************************************/
/*! exports provided: ContributeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeSearchComponent", function() { return ContributeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contribute.service */ "ievF");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/notification.service */ "Y4+Y");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contribute_search_lista_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contribute-search-lista-item.component */ "e1xN");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");



















function ContributeSearchComponent_app_contribute_search_lista_item_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-contribute-search-lista-item", 15);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r2)("searchSentenceL2", ctx_r1.searchSentenceL2Control.value);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
const _c1 = function (a0) { return { "overflow-hidden": a0 }; };
const _c2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
let ContributeSearchComponent = class ContributeSearchComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(credencialsService, contributeService, notificationService, toastr, spinner, translateService) {
        super();
        this.credencialsService = credencialsService;
        this.contributeService = contributeService;
        this.notificationService = notificationService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.translateService = translateService;
        this.language1Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.searchSentenceL1Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.searchSentenceL2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.listSearch = [];
        this.listenEventEmitters();
        this.receiveNotifications();
    }
    ngOnInit() {
        this.contributeService.languagesL2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.contributeService.languagesL2Control.disable({ emitEvent: false });
        this.searchSentenceL1Control.disable({ emitEvent: false });
        this.searchSentenceL2Control.disable({ emitEvent: false });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.language1Control.valueChanges, this.contributeService.projectControl.valueChanges)
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(() => {
            if (this.language1Control.value) {
                this.contributeService.languagesL2Control.enable({ emitEvent: false });
                this.searchSentenceL1Control.enable({ emitEvent: false });
                this.searchSentenceL2Control.enable({ emitEvent: false });
                this.spinner.show();
                this.incrementIsBusy();
                this.contributeService
                    .getTranslationsFromLanguageAndProject(this.language1Control.value, this.contributeService.projectControl.value)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.listSearch = response;
                    this.spinner.hide();
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.spinner.hide();
                    this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorLoadingTranslations'));
                });
            }
            else {
                this.contributeService.languagesL2Control.setValue([], { emitEvent: false });
                this.contributeService.languagesL2Control.disable({ emitEvent: false });
                this.searchSentenceL1Control.disable({ emitEvent: false });
                this.searchSentenceL1Control.setValue('', { emitEvent: false });
                this.searchSentenceL2Control.disable({ emitEvent: false });
                this.searchSentenceL2Control.setValue('', { emitEvent: false });
                this.listSearch = [];
            }
        });
    }
    ngOnDestroy() {
        this.contributeService.projectControl.setValue(null, { emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.spinner.hide();
    }
    filtrarLista() {
        if (!this.listSearch) {
            return [];
        }
        if (this.searchSentenceL1Control.value.trim().length === 0 && this.searchSentenceL2Control.value.trim().length === 0 &&
            this.contributeService.languagesL2Control.value.length === 0) {
            return this.listSearch;
        }
        return this.listSearch
            .filter(x => (this.searchSentenceL1Control.value.trim().length === 0 ||
            x.sentence.text.includes(this.searchSentenceL1Control.value.trim())) &&
            ((this.contributeService.languagesL2Control.value.length === 0 && this.searchSentenceL2Control.value.trim().length === 0) ||
                x.translations
                    .filter(t => (this.contributeService.languagesL2Control.value.length === 0 ||
                    this.contributeService.languagesL2Control.value.includes(t.sentenceL2.languageId)) &&
                    t.sentenceL2.text.includes(this.searchSentenceL2Control.value.trim())).length > 0));
    }
    removeLanguage1([listLanguage, language1]) {
        if (!language1) {
            return listLanguage;
        }
        if (!listLanguage) {
            return [];
        }
        return listLanguage.filter(x => x.id !== language1);
    }
    listenEventEmitters() {
        this.contributeService.projectControl.valueChanges
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            if (value) {
                const project = this.contributeService.projectsList.find(x => x.id === value);
                this.language1Control.setValue(project.language1Id, { emitEvent: false });
                this.language1Control.disable();
                this.contributeService.languagesL2Control.setValue([project.language2Id], { emitEvent: false });
            }
            else {
                this.language1Control.setValue(null, { emitEvent: false });
                this.language1Control.enable();
                this.contributeService.languagesL2Control.setValue([], { emitEvent: false });
            }
        });
    }
    receiveNotifications() {
        this.notificationService.translationLikeAdded
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((data) => {
            this.listSearch.forEach(x => {
                const translation = x.translations.find(y => y.id === data.translationId);
                if (translation) {
                    translation.translationLikes.push(data);
                    translation.translationLikes = translation.translationLikes.slice();
                }
            });
        });
        this.notificationService.translationLikeUpdated
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((data) => {
            this.listSearch.forEach(x => {
                const translation = x.translations.find(y => y.id === data.translationId);
                if (translation) {
                    const translationLike = translation.translationLikes.find(y => y.userId === data.userId);
                    if (translationLike) {
                        translationLike.like = data.like;
                        translation.translationLikes = translation.translationLikes.slice();
                    }
                }
            });
        });
    }
};
ContributeSearchComponent.ɵfac = function ContributeSearchComponent_Factory(t) { return new (t || ContributeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_6__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"])); };
ContributeSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeSearchComponent, selectors: [["app-contribute-search"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 42, consts: [[1, "row", "m-0", "px-2"], [1, "col", "p-0", "d-flex"], ["valueExpr", "id", "displayExpr", "name", 1, "form-control", 3, "dataSource", "placeholder", "showClearButton", "formControl"], [1, "col-1", "d-flex", "align-items-end", "justify-content-center"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-right", "fa-2x", "text-color"], ["valueExpr", "id", "displayExpr", "name", "applyValueMode", "useButtons", 1, "form-control", 3, "dataSource", "placeholder", "showSelectionControls", "formControl"], [1, "row", "m-0", "p-2"], [1, "col", "p-0"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], [1, "col-1"], [1, "height-list", "w-100", "pl-2", "pr-scroll", "position-relative"], [1, "h-100", "w-100", 3, "ngClass", "items"], ["scroll", ""], [3, "item", "searchSentenceL2", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "item", "searchSentenceL2"]], template: function ContributeSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dx-select-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dx-tag-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "virtual-scroller", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContributeSearchComponent_app_contribute_search_lista_item_22_Template, 1, 2, "app-contribute-search-lista-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ngx-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 16, "Shared.Label.SelectLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.contributeService == null ? null : ctx.contributeService.languagesList)("showClearButton", true)("formControl", ctx.language1Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 22, "Shared.Label.SelectLanguages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c0, ctx.contributeService == null ? null : ctx.contributeService.languagesList, ctx.language1Control.value), ctx.removeLanguage1, ctx))("showSelectionControls", true)("formControl", ctx.contributeService == null ? null : ctx.contributeService.languagesL2Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 24, "Shared.Label.Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchSentenceL1Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 26, "Shared.Label.Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchSentenceL2Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c1, ctx.contributeService.sentenceSelect))("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](21, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](37, _c2, ctx.listSearch, ctx.contributeService.languagesL2Control.value, ctx.searchSentenceL1Control.value, ctx.searchSentenceL2Control.value), ctx.filtrarLista, ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.viewPortItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxSelectBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxTagBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_13__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"], _contribute_search_lista_item_component__WEBPACK_IMPORTED_MODULE_15__["ContributeSearchListaItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_16__["FunctionCallPipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #001f3f !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2ECC40;\n}\n.scrollbar-trach-white[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #39CCCC !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #85144b;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #001f3f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #7FDBFF;\n}\n.p-scroll[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.pr-scroll[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #DDDDDD;\n}\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198DC8;\n  background: #DDDDDD;\n}\n.container-body-popup[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n@media screen and (min-height: 451px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: calc(100vh - (110px + (2 * 38px) + (5 * 8px) + 32px + 4px));\n  }\n}\n@media screen and (max-height: 450px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\nvirtual-scroller[_ngcontent-%COMP%] {\n  background: white;\n  overflow-y: scroll !important;\n}\n.text-color[_ngcontent-%COMP%] {\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250cmlidXRlLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0Usb0NBQUE7QUNBRjtBREdBO0VBQ0UsVUFBQTtBQ0FGO0FER0EsVUFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNBRjtBREdBO0VBQ0UsOEJBQUE7QUNBRjtBREdBLFdBQUE7QUFDQTtFQUNFLG1CQUFBO0FDQUY7QURHQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNBRjtBRElBO0VBQ0UsbUJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBO0VBQ0UsdUJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBLGNBQUE7QUFrQkEsaUJBQUE7QUFDQTtFQUNFLGdCQVhrQjtFQVlsQixvQkFBQTtFQUNBLGtDQUFBO0FDbEJGO0FEcUJBO0VBQ0UsbUJBeEJhO0FDTWY7QURxQkE7RUFDRSw4QkFBQTtFQUNBLG1CQTdCYTtBQ1dmO0FEcUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRHFCQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ2xCRjtBQXBFQTtFQUNFO0lBQ0UsbUVBQUE7RUF1RUY7QUFDRjtBQXBFQTtFQUNFO0lBQ0UsYUQrQ3FCO0VDdUJ2QjtBQUNGO0FBbkVBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQXFFRjtBQWxFQTtFQUNFLFdBQUE7QUFxRUYiLCJmaWxlIjoiY29udHJpYnV0ZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICMyRUNDNDA7XG59XG5cbi5zY3JvbGxiYXItdHJhY2gtd2hpdGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzM5Q0NDQyAhaW1wb3J0YW50O1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODUxNDRiO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAxZjNmO1xufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjN0ZEQkZGO1xufVxuXG4ucC1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wci1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi8qIFZhcmlhYmxlcyAqL1xuLy8gQ29sb3Inc1xuJHNlbGVjdC1jb2xvcjogI0RERERERDtcbiRzZWxlY3QtYm9yZGVyLWNvbG9yOiAjMTk4REM4O1xuXG5cbi8vIEhlaWdodCdzXG4kaGVpZ2h0LWJ0bjogMzhweDtcbiRoZWlnaHQtaW5wdXQ6IDMycHg7XG4kaGVpZ2h0LWxpc3RhLWl0ZW06IDUwcHg7XG4kaGVpZ2h0LW5hdi1iYXI6IDExMHB4O1xuJGhlaWdodC1saXN0LXJlc3BvbnNpdmU6IDQwMHB4O1xuXG4kaW5kZXgtbmF2LWJhcjogMTAwO1xuXG4kcC0xOiA0cHg7XG4kcC0yOiA4cHg7XG5cbi8qIExpc3RzIFN0eWxlcyAqL1xuLmxpc3RhLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0LWxpc3RhLWl0ZW07XG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdGEtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICRzZWxlY3QtY29sb3I7XG59XG5cbi5saXN0YS1pdGVtLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkc2VsZWN0LWJvcmRlci1jb2xvcjtcbiAgYmFja2dyb3VuZDogJHNlbGVjdC1jb2xvcjtcbn1cblxuLmNvbnRhaW5lci1ib2R5LXBvcHVwIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnBvcHVwLWJ1dHRvbnMge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmM2YgIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzJFQ0M0MDtcbn1cblxuLnNjcm9sbGJhci10cmFjaC13aGl0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMzlDQ0NDICFpbXBvcnRhbnQ7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4NTE0NGI7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDFmM2Y7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjN0ZEQkZGO1xufVxuXG4ucC1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wci1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi8qIFZhcmlhYmxlcyAqL1xuLyogTGlzdHMgU3R5bGVzICovXG4ubGlzdGEtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdGEtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG59XG5cbi5saXN0YS1pdGVtLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk4REM4O1xuICBiYWNrZ3JvdW5kOiAjREREREREO1xufVxuXG4uY29udGFpbmVyLWJvZHktcG9wdXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA0NTFweCkge1xuICAuaGVpZ2h0LWxpc3Qge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgxMTBweCArICgyICogMzhweCkgKyAoNSAqIDhweCkgKyAzMnB4ICsgNHB4KSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuaGVpZ2h0LWxpc3Qge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbnZpcnR1YWwtc2Nyb2xsZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICM5OTk7XG59Il19 */"] });
ContributeSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], ContributeSearchComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute-search',
                templateUrl: './contribute-search.component.html',
                styleUrls: ['./contribute-search.component.scss']
            }]
    }], function () { return [{ type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_6__["CredentialsService"] }, { type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"] }, { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "F6YZ":
/*!**********************************************************!*\
  !*** ./src/app/signin-signup/signin-signup.component.ts ***!
  \**********************************************************/
/*! exports provided: SignInSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInSignUpComponent", function() { return SignInSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin-form/signin-form.component */ "xVkl");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "mIb8");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class SignInSignUpComponent {
    resetSignInForm() {
        if (this.signInForm && this.signInForm.form) {
            this.signInForm.form.reset({ emitEvent: false });
            this.signInForm.isFormSubmitted = false;
        }
    }
    resetSignUpForm() {
        if (this.signUpForm && this.signUpForm.form) {
            this.signUpForm.form.reset({ emitEvent: false });
            this.signUpForm.form.get('proficiencyLanguages').clear();
            this.signUpForm.form.get('projects').clear();
            this.signUpForm.isFormSubmitted = false;
        }
    }
}
SignInSignUpComponent.ɵfac = function SignInSignUpComponent_Factory(t) { return new (t || SignInSignUpComponent)(); };
SignInSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInSignUpComponent, selectors: [["app-signin-signup"]], viewQuery: function SignInSignUpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_1__["SignInFormComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__["SignUpFormComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signInForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signUpForm = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "container-signin-signup", "h-100"], [1, "row", "h-100"], [1, "d-none", "d-md-block", "col-md-3", "h-100"], [1, "col-12", "col-md-9", "register-right", "h-100"], [1, "row", "col-12", "justify-content-end", "m-0", "p-0"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], [1, "nav-item"], ["id", "signin-tab", "data-toggle", "tab", "href", "#signin", "role", "tab", "aria-controls", "signin", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "singup-tab", "data-toggle", "tab", "href", "#singup", "role", "tab", "aria-controls", "singup", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "signin-tab", 1, "tab-content"], ["id", "signin", "role", "tabpanel", "aria-labelledby", "signin-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "singup", "role", "tabpanel", "aria-labelledby", "singup-tab", 1, "tab-pane", "fade", "show"]], template: function SignInSignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInSignUpComponent_Template_a_click_7_listener() { return ctx.resetSignUpForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInSignUpComponent_Template_a_click_11_listener() { return ctx.resetSignInForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-signin-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-signup-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, "SignInSignUpComponent.Label.SignIn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, "SignInSignUpComponent.Label.SignUp"));
    } }, directives: [_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_1__["SignInFormComponent"], _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__["SignUpFormComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".container-signin-signup[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(left, #39CCCC, #001f3f);\n  padding: 30px 15px;\n}\n\n.register-right[_ngcontent-%COMP%] {\n  background: #DDDDDD;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 15% 55%;\n  height: 100%;\n  overflow-y: auto;\n  padding-bottom: 20px;\n}\n\n.container-signin-signup[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: #ffffff;\n  float: right;\n  width: 200px;\n}\n\n.container-signin-signup[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 2%;\n  height: 34px;\n  font-weight: 600;\n  color: #AAAAAA;\n  border: #39CCCC solid 1px;\n}\n\n.container-signin-signup[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  width: 100px;\n  color: #39CCCC;\n  border: 2px solid #85144b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ25pbi1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyREFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoic2lnbmluLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItc2lnbmluLXNpZ251cCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzOUNDQ0MsICMwMDFmM2YpO1xuICBwYWRkaW5nOiAzMHB4IDE1cHg7XG59XG5cbi5yZWdpc3Rlci1yaWdodCB7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1JSA1NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jb250YWluZXItc2lnbmluLXNpZ251cCAubmF2LXRhYnMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmNvbnRhaW5lci1zaWduaW4tc2lnbnVwIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAyJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0FBQUFBQTtcbiAgYm9yZGVyOiAjMzlDQ0NDIHNvbGlkIDFweDtcbn1cblxuLmNvbnRhaW5lci1zaWduaW4tc2lnbnVwIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogIzM5Q0NDQztcbiAgYm9yZGVyOiAycHggc29saWQgIzg1MTQ0Yjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin-signup',
                templateUrl: './signin-signup.component.html',
                styleUrls: ['./signin-signup.component.scss']
            }]
    }], null, { signInForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_1__["SignInFormComponent"]]
        }], signUpForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__["SignUpFormComponent"]]
        }] }); })();


/***/ }),

/***/ "FnbC":
/*!***************************************************************!*\
  !*** ./src/app/contribute/viewmodels/translationViewModel.ts ***!
  \***************************************************************/
/*! exports provided: TranslationViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationViewModel", function() { return TranslationViewModel; });
/* harmony import */ var _sentenceViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sentenceViewModel */ "NktI");

class TranslationViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.sentenceSpokenId = registo.sentenceSpokenId;
            this.sentenceSignId = registo.sentenceSignId;
            this.userCreationId = registo.userCreationId;
            this.dateCreation = registo.dateCreation;
            this.userChangeId = registo.userChangeId;
            this.dateChange = registo.dateChange;
            if (registo.sentenceSpoken) {
                this.sentenceSpoken = new _sentenceViewModel__WEBPACK_IMPORTED_MODULE_0__["SentenceViewModel"](registo.sentenceSpoken);
            }
            if (registo.sentenceSign) {
                this.sentenceSign = new _sentenceViewModel__WEBPACK_IMPORTED_MODULE_0__["SentenceViewModel"](registo.sentenceSign);
            }
        }
    }
}


/***/ }),

/***/ "HtUT":
/*!********************************************!*\
  !*** ./src/app/shared/helpers/modeEnum.ts ***!
  \********************************************/
/*! exports provided: ModeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeEnum", function() { return ModeEnum; });
var ModeEnum;
(function (ModeEnum) {
    ModeEnum[ModeEnum["ADD"] = 1] = "ADD";
    ModeEnum[ModeEnum["EDIT"] = 2] = "EDIT";
    ModeEnum[ModeEnum["CREATE"] = 3] = "CREATE";
})(ModeEnum || (ModeEnum = {}));


/***/ }),

/***/ "M1mf":
/*!**********************************************************************!*\
  !*** ./src/app/signin-signup/signup-form/services/signup.service.ts ***!
  \**********************************************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../signin-form/viewmodels/userViewModel */ "e72g");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/http.service */ "bUwk");





class SignUpService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = 'User/';
    }
    changePassword(changePassword) {
        const body = JSON.stringify(changePassword);
        return this.httpService.put(this.url + 'changePassword/', body);
    }
    resetPassword(resetPassword) {
        const body = JSON.stringify(resetPassword);
        return this.httpService.post(this.url + 'resetpassword/', body);
    }
    checkCodeResetPassword(resetPassword) {
        const body = JSON.stringify(resetPassword);
        return this.httpService.post(this.url + 'checkcoderesetpassword/', body);
    }
    sendCodeResetPassword(resetPassword) {
        const body = JSON.stringify(resetPassword);
        return this.httpService.post(this.url + 'sendcoderesetpassword/', body);
    }
    emailExists(email) {
        const body = JSON.stringify(email);
        return this.httpService.post(this.url + 'email/', body);
    }
    registerUser(userRegister) {
        const body = JSON.stringify(userRegister);
        return this.httpService.post(this.url, body);
    }
    updateProfile(userProfile) {
        const body = JSON.stringify(userProfile);
        return this.httpService.put(this.url + 'profile/', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_2__["UserViewModel"](response) : null;
        }));
    }
    existsSomeSentenceUserIdAndLanguageId(userId, languageId) {
        return this.httpService.get(this.url + 'existssomesentence/' + userId + '/' + languageId);
    }
}
SignUpService.ɵfac = function SignUpService_Factory(t) { return new (t || SignUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
SignUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignUpService, factory: SignUpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "NktI":
/*!************************************************************!*\
  !*** ./src/app/contribute/viewmodels/sentenceViewModel.ts ***!
  \************************************************************/
/*! exports provided: SentenceViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceViewModel", function() { return SentenceViewModel; });
class SentenceViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.id = registo.id;
            this.text = registo.text;
            this.languageId = registo.languageId;
            this.projectId = registo.projectId;
            this.userCreationId = registo.userCreationId;
            this.dateCreation = registo.dateCreation;
            this.userChangeId = registo.userChangeId;
            this.dateChange = registo.dateChange;
            this.countTranslations = registo.countTranslations;
            this.lastSentenceTranslationId = registo.lastSentenceTranslationId;
            this.lastSentenceTranslation = registo.lastSentenceTranslation ? new SentenceViewModel(registo.lastSentenceTranslation) : null;
        }
    }
}


/***/ }),

/***/ "OsF4":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.services';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    info(...objects) {
        this.log(console.log, LogLevel.Info, objects);
    }
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
        }
    }
}
/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "aEDk");
/* harmony import */ var _pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/functionCall.pipe */ "YgGP");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTagBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSliderModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxRadioGroupModule"],
            ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
            ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTagBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSliderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxRadioGroupModule"],
        ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_8__["FunctionCallPipe"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTagBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSliderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxRadioGroupModule"],
        ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTagBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSliderModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxRadioGroupModule"],
        ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"],
        _pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_8__["FunctionCallPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTagBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSliderModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxRadioGroupModule"],
                    ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
                    ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"],
                ],
                declarations: [
                    _pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_8__["FunctionCallPipe"],
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxCheckBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxTagBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxSliderModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxScrollViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxRadioGroupModule"],
                    ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
                    ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"],
                    _pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_8__["FunctionCallPipe"],
                ],
                providers: [
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Po4a":
/*!**********************************************************************!*\
  !*** ./src/app/contribute/download/contribute-download.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContributeDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeDownloadComponent", function() { return ContributeDownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contribute.service */ "ievF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");

















function ContributeDownloadComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.sentenceL1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.sentenceL2);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
let ContributeDownloadComponent = class ContributeDownloadComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"] {
    constructor(contributeService, translateService, spinner, toastr) {
        super();
        this.contributeService = contributeService;
        this.translateService = translateService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.language1Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.language2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.searchL1Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.searchL2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.listTranslationsToExport = [];
        this.listTranslationsToExportFiltered = [];
        this.setting = {
            element: {
                dynamicDownload: null
            }
        };
    }
    ngOnInit() {
        this.searchL1Control.disable({ emitEvent: false });
        this.searchL2Control.disable({ emitEvent: false });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.language1Control.valueChanges, this.language2Control.valueChanges)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(() => {
            if (this.language1Control.value && this.language2Control.value) {
                this.searchL1Control.enable({ emitEvent: false });
                this.searchL2Control.enable({ emitEvent: false });
            }
            else {
                this.searchL1Control.setValue('', { emitEvent: false });
                this.searchL2Control.setValue('', { emitEvent: false });
                this.searchL1Control.disable({ emitEvent: false });
                this.searchL2Control.disable({ emitEvent: false });
            }
            this.loadRegistos();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.searchL1Control.valueChanges, this.searchL2Control.valueChanges)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(() => {
            this.filterListTranslationsToExport();
        });
        this.listenEventEmitters();
    }
    ngOnDestroy() {
        this.contributeService.projectControl.setValue(null, { emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.spinner.hide();
    }
    removeLanguage([languagesList, languageId]) {
        if (languagesList) {
            return languagesList.filter(x => x.id !== languageId);
        }
        return [];
    }
    onExportFile() {
        const language1 = this.contributeService.languagesList.find(x => x.id === this.language1Control.value);
        const language2 = this.contributeService.languagesList.find(x => x.id === this.language2Control.value);
        const exportData = this.listTranslationsToExportFiltered.map(x => {
            const e = {};
            e[language1.name + ' - ' + language1.abbreviation] = x.sentenceL1;
            e[language2.name + ' - ' + language2.abbreviation] = x.sentenceL2;
            return e;
        });
        this.dyanmicDownloadByHtmlTag({
            fileName: 'Translations.json',
            fileType: 'text/json',
            text: JSON.stringify(exportData, null, '\t')
        });
    }
    dyanmicDownloadByHtmlTag(arg) {
        if (!this.setting.element.dynamicDownload) {
            this.setting.element.dynamicDownload = document.createElement('a');
        }
        const element = this.setting.element.dynamicDownload;
        element.setAttribute('href', `data:${arg.fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
        element.setAttribute('download', arg.fileName);
        const event = new MouseEvent('click');
        element.dispatchEvent(event);
    }
    loadRegistos() {
        if (this.language1Control.value && this.language2Control.value) {
            this.spinner.show();
            this.incrementIsBusy();
            this.contributeService
                .getTranslationsFromLanguage1ToLanguage2AndProject(this.language1Control.value, this.language2Control.value, this.contributeService.projectControl.value)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                this.decrementIsBusy();
                this.listTranslationsToExport = response;
                this.filterListTranslationsToExport();
                this.spinner.hide();
            }, () => {
                this.decrementIsBusy();
                this.spinner.hide();
                this.toastr.error(this.translateService.instant('Shared.Message.ErrorLoading'));
            });
        }
        else {
            this.listTranslationsToExport = [];
            this.listTranslationsToExportFiltered = [];
        }
    }
    filterListTranslationsToExport() {
        this.listTranslationsToExportFiltered = this.listTranslationsToExport
            .filter(x => (this.searchL1Control.value.trim().length === 0 ||
            x.sentenceL1.toLowerCase().includes(this.searchL1Control.value.trim().toLowerCase())) &&
            (this.searchL2Control.value.trim().length === 0 ||
                x.sentenceL2.toLowerCase().includes(this.searchL2Control.value.trim().toLowerCase())));
    }
    listenEventEmitters() {
        this.contributeService.projectControl.valueChanges
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            if (value) {
                const project = this.contributeService.projectsList.find(x => x.id === value);
                this.language1Control.setValue(project.language1Id, { emitEvent: false });
                this.language2Control.setValue(project.language2Id);
                this.language1Control.disable({ emitEvent: false });
                this.language2Control.disable({ emitEvent: false });
                this.searchL1Control.enable({ emitEvent: false });
                this.searchL2Control.enable({ emitEvent: false });
            }
            else {
                this.language1Control.setValue(null, { emitEvent: false });
                this.language2Control.setValue(null);
                this.language1Control.enable({ emitEvent: false });
                this.language2Control.enable({ emitEvent: false });
            }
        });
    }
};
ContributeDownloadComponent.ɵfac = function ContributeDownloadComponent_Factory(t) { return new (t || ContributeDownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"])); };
ContributeDownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeDownloadComponent, selectors: [["app-contribute-download"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 38, consts: [[1, "row", "m-0", "px-2"], [1, "col", "p-0", "d-flex"], ["valueExpr", "id", "displayExpr", "name", 1, "form-control", 3, "dataSource", "placeholder", "showClearButton", "formControl"], [1, "col-1", "d-flex", "align-items-end", "justify-content-center"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-right", "fa-2x", "text-color"], [1, "row", "m-0", "p-2"], [1, "col", "p-0"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], [1, "col-1"], [1, "btn", "btn-primary", "w-100", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "height-list", "w-100", "pl-2", "pr-scroll", "position-relative"], [1, "h-100", "w-100", 3, "items"], ["scroll", ""], ["class", "row m-0 lista-item white-background", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [1, "row", "m-0", "lista-item", "white-background"], [1, "col", "d-flex", "border-bottom", "align-items-center"], [1, "col-1", "border-left", "border-right", "border-bottom"]], template: function ContributeDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dx-select-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dx-select-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeDownloadComponent_Template_button_click_16_listener() { return ctx.onExportFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "virtual-scroller", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ContributeDownloadComponent_div_24_Template, 6, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ngx-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 20, "Shared.Label.SelectLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](32, _c0, ctx.contributeService == null ? null : ctx.contributeService.languagesList, ctx.language2Control.value), ctx.removeLanguage, ctx))("showClearButton", true)("formControl", ctx.language1Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 26, "Shared.Label.SelectLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c0, ctx.contributeService == null ? null : ctx.contributeService.languagesList, ctx.language1Control.value), ctx.removeLanguage, ctx))("showClearButton", true)("formControl", ctx.language2Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 28, "Shared.Label.Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchL1Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.listTranslationsToExportFiltered.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 30, "Shared.Label.Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchL2Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.listTranslationsToExportFiltered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.viewPortItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxSelectBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_12__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerComponent"]], pipes: [_shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_14__["FunctionCallPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #001f3f !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2ECC40;\n}\n.scrollbar-trach-white[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #39CCCC !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #85144b;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #001f3f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #7FDBFF;\n}\n.p-scroll[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.pr-scroll[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #DDDDDD;\n}\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198DC8;\n  background: #DDDDDD;\n}\n.container-body-popup[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n@media screen and (min-height: 451px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: calc(100vh - (110px + (2 * 38px) + (5 * 8px) + 32px + 4px));\n  }\n}\n@media screen and (max-height: 450px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\nvirtual-scroller[_ngcontent-%COMP%] {\n  background: white;\n  overflow-y: scroll !important;\n}\n.text-color[_ngcontent-%COMP%] {\n  color: #999;\n}\n.invisible-background[_ngcontent-%COMP%] {\n  background-color: #333 !important;\n}\n.white-background[_ngcontent-%COMP%] {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250cmlidXRlLWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFDRSxvQ0FBQTtBQ0FGO0FER0E7RUFDRSxVQUFBO0FDQUY7QURHQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0FGO0FER0E7RUFDRSw4QkFBQTtBQ0FGO0FER0EsV0FBQTtBQUNBO0VBQ0UsbUJBQUE7QUNBRjtBREdBLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0FGO0FESUE7RUFDRSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSx1QkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUEsY0FBQTtBQWtCQSxpQkFBQTtBQUNBO0VBQ0UsZ0JBWGtCO0VBWWxCLG9CQUFBO0VBQ0Esa0NBQUE7QUNsQkY7QURxQkE7RUFDRSxtQkF4QmE7QUNNZjtBRHFCQTtFQUNFLDhCQUFBO0VBQ0EsbUJBN0JhO0FDV2Y7QURxQkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDbEJGO0FEcUJBO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDbEJGO0FBcEVBO0VBQ0U7SUFDRSxtRUFBQTtFQXVFRjtBQUNGO0FBcEVBO0VBQ0U7SUFDRSxhRCtDcUI7RUN1QnZCO0FBQ0Y7QUFuRUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FBcUVGO0FBbEVBO0VBQ0UsV0FBQTtBQXFFRjtBQWxFQTtFQUNFLGlDQUFBO0FBcUVGO0FBbEVBO0VBQ0UsaUJBQUE7QUFxRUYiLCJmaWxlIjoiY29udHJpYnV0ZS1kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmM2YgIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzJFQ0M0MDtcbn1cblxuLnNjcm9sbGJhci10cmFjaC13aGl0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMzlDQ0NDICFpbXBvcnRhbnQ7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4NTE0NGI7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDFmM2Y7XG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM3RkRCRkY7XG59XG5cbi5wLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLyogVmFyaWFibGVzICovXG4vLyBDb2xvcidzXG4kc2VsZWN0LWNvbG9yOiAjREREREREO1xuJHNlbGVjdC1ib3JkZXItY29sb3I6ICMxOThEQzg7XG5cblxuLy8gSGVpZ2h0J3NcbiRoZWlnaHQtYnRuOiAzOHB4O1xuJGhlaWdodC1pbnB1dDogMzJweDtcbiRoZWlnaHQtbGlzdGEtaXRlbTogNTBweDtcbiRoZWlnaHQtbmF2LWJhcjogMTEwcHg7XG4kaGVpZ2h0LWxpc3QtcmVzcG9uc2l2ZTogNDAwcHg7XG5cbiRpbmRleC1uYXYtYmFyOiAxMDA7XG5cbiRwLTE6IDRweDtcbiRwLTI6IDhweDtcblxuLyogTGlzdHMgU3R5bGVzICovXG4ubGlzdGEtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQtbGlzdGEtaXRlbTtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogJHNlbGVjdC1jb2xvcjtcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRzZWxlY3QtYm9yZGVyLWNvbG9yO1xuICBiYWNrZ3JvdW5kOiAkc2VsZWN0LWNvbG9yO1xufVxuXG4uY29udGFpbmVyLWJvZHktcG9wdXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWYzZiAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMkVDQzQwO1xufVxuXG4uc2Nyb2xsYmFyLXRyYWNoLXdoaXRlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICMzOUNDQ0MgIWltcG9ydGFudDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg1MTQ0Yjtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMWYzZjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM3RkRCRkY7XG59XG5cbi5wLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLyogVmFyaWFibGVzICovXG4vKiBMaXN0cyBTdHlsZXMgKi9cbi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0RERERERDtcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThEQzg7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG59XG5cbi5jb250YWluZXItYm9keS1wb3B1cCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wb3B1cC1idXR0b25zIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQ1MXB4KSB7XG4gIC5oZWlnaHQtbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDExMHB4ICsgKDIgKiAzOHB4KSArICg1ICogOHB4KSArIDMycHggKyA0cHgpKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5oZWlnaHQtbGlzdCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxufVxudmlydHVhbC1zY3JvbGxlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmludmlzaWJsZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */"] });
ContributeDownloadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], ContributeDownloadComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeDownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute-download',
                templateUrl: './contribute-download.component.html',
                styleUrls: ['./contribute-download.component.scss']
            }]
    }], function () { return [{ type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Q+cc":
/*!************************************************************************!*\
  !*** ./src/app/contribute/translate/contribute-translate.component.ts ***!
  \************************************************************************/
/*! exports provided: ContributeTranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeTranslateComponent", function() { return ContributeTranslateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewmodels/sentenceViewModel */ "NktI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/contribute.service */ "ievF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _contribute_translate_lista_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contribute-translate-lista-item.component */ "rW7k");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");























const _c0 = ["fileInput"];
function ContributeTranslateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.contributeService == null ? null : ctx_r0.contributeService.fileImportControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "ContributeComponent.Label.ChooseFile"), " ");
} }
function ContributeTranslateComponent_app_contribute_translate_lista_item_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-contribute-translate-lista-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteItem", function ContributeTranslateComponent_app_contribute_translate_lista_item_28_Template_app_contribute_translate_lista_item_deleteItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onDeleteItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r8)("language1", ctx_r2.language1Control.value)("language2", ctx_r2.language2Control.value)("searchL1", ctx_r2.searchSentenceL1Control)("searchL2", ctx_r2.searchSentenceL2Control);
} }
function ContributeTranslateComponent_dx_popup_30_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "dx-slider", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ContributeTranslateComponent_dx_popup_30_div_2_Template_dx_slider_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.proficiencyLanguage.levelProficiency = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxo-tooltip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateComponent_dx_popup_30_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.saveLanguageProficiency(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "ContributeComponent.Label.InsertLevelLanguageProficiency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.languageMissingLevelProficiency == null ? null : ctx_r11.languageMissingLevelProficiency.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", 0)("max", 10)("value", ctx_r11.proficiencyLanguage.levelProficiency);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "Shared.Label.Save"), " ");
} }
function ContributeTranslateComponent_dx_popup_30_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dx-popup", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ContributeTranslateComponent_dx_popup_30_Template_dx_popup_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.popupVisible = $event; })("onHidden", function ContributeTranslateComponent_dx_popup_30_Template_dx_popup_onHidden_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onHiddenPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContributeTranslateComponent_dx_popup_30_div_2_Template, 13, 11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 8, "ContributeComponent.Label.MissingLevelLanguageProficiency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 500)("height", 250)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx_r3.popupVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
} }
function ContributeTranslateComponent_div_33_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r22.text, " ");
} }
function ContributeTranslateComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dxmousewheel", function ContributeTranslateComponent_div_33_Template_div_dxmousewheel_0_listener($event) { return $event.stopPropagation(); })("mousewheel", function ContributeTranslateComponent_div_33_Template_div_mousewheel_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "virtual-scroller", 34, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContributeTranslateComponent_div_33_div_4_Template, 3, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateComponent_div_33_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateComponent_div_33_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r4.sentencesToImport);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r20.viewPortItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, "Shared.Label.Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Shared.Label.Confirm"), " ");
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
const _c2 = function (a0) { return { "overflow-hidden": a0 }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
let ContributeTranslateComponent = class ContributeTranslateComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"] {
    constructor(router, credencialsService, contributeService, toastr, spinner, translateService) {
        super();
        this.router = router;
        this.credencialsService = credencialsService;
        this.contributeService = contributeService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.translateService = translateService;
        this.language1Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.language2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.searchSentenceL1Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true });
        this.searchSentenceL2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true });
        this.listSentencesSpokenLanguage = [];
        this.popupVisible = false;
        this.popupFileImportVisible = false;
        this.sentencesToImport = [];
        this.languageMissingLevelProficiency = null;
        this.proficiencyLanguage = null;
        this.listenEventEmitters();
    }
    ngOnDestroy() {
        this.contributeService.projectControl.setValue(null, { emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        this.contributeService.sentenceSelect = null;
        this.spinner.hide();
    }
    onCancel() {
        this.popupFileImportVisible = false;
        this.sentencesToImport = [];
        this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
    }
    onSave() {
        this.incrementIsBusy();
        this.contributeService.insertSentences(this.sentencesToImport)
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.popupFileImportVisible = false;
            this.sentencesToImport = [];
            this.listSentencesSpokenLanguage.push(...response);
            this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
            this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
        }, () => {
            this.toastr.error(this.translateService.instant('ContributeService.Message.ErrorSavingSenteces'));
            this.decrementIsBusy();
        });
    }
    showButtonImport() {
        if (this.router.url.includes('contribute/translate') &&
            this.contributeService.projectControl.value &&
            this.credencialsService.currentUser &&
            this.credencialsService.currentUser.userProjects &&
            this.credencialsService.currentUser.userProjects
                .some(x => x.projectId === this.contributeService.projectControl.value && x.isProjectOwner)) {
            return true;
        }
        return false;
    }
    onLoadTranslations() {
        if (this.language1Control.value && this.language2Control.value) {
            this.spinner.show();
            this.searchSentenceL1Control.enable({ emitEvent: false });
            this.searchSentenceL2Control.enable({ emitEvent: false });
            this.incrementIsBusy();
            this.contributeService.getSentecesWithLastTranslation(this.language1Control.value, this.language2Control.value, this.contributeService.projectControl.value)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                this.decrementIsBusy();
                this.listSentencesSpokenLanguage = response.map(x => new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_7__["SentenceViewModel"](x));
                this.spinner.hide();
            }, () => {
                this.decrementIsBusy();
                this.spinner.hide();
                this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorLoadingSentences'));
            });
        }
        else {
            this.searchSentenceL1Control.disable({ emitEvent: false });
            this.searchSentenceL2Control.disable({ emitEvent: false });
            this.searchSentenceL1Control.setValue('', { emitEvent: false });
            this.searchSentenceL2Control.setValue('', { emitEvent: false });
            this.listSentencesSpokenLanguage = [];
        }
    }
    onCheckLevelProfeciencyAndLoadTranslations() {
        if (this.credencialsService.isAuthenticated()) {
            if (this.language1Control.value &&
                !this.credencialsService.currentUser.proficiencyLanguages.some(x => x.languageId === this.language1Control.value)) {
                this.openPopupMissingLevelProficiency(this.language1Control.value);
                return;
            }
            if (this.language2Control.value &&
                !this.credencialsService.currentUser.proficiencyLanguages.some(x => x.languageId === this.language2Control.value)) {
                this.openPopupMissingLevelProficiency(this.language2Control.value);
                return;
            }
        }
        this.onLoadTranslations();
    }
    openPopupMissingLevelProficiency(languageId) {
        this.languageMissingLevelProficiency = this.contributeService.languagesList.find(x => x.id === languageId);
        this.proficiencyLanguage = {
            languageId,
            userId: this.credencialsService.getCredentials.id,
            levelProficiency: 0
        };
        this.popupVisible = true;
    }
    onHiddenPopup() {
        if (this.proficiencyLanguage) {
            if (this.proficiencyLanguage.languageId === this.language1Control.value) {
                this.language1Control.setValue(null, { emitEvent: false });
            }
            if (this.proficiencyLanguage.languageId === this.language2Control.value) {
                this.language2Control.setValue(null, { emitEvent: false });
            }
            if (this.contributeService.projectControl.value) {
                this.contributeService.projectControl.setValue(null);
            }
            this.proficiencyLanguage = null;
            this.languageMissingLevelProficiency = null;
        }
    }
    saveLanguageProficiency() {
        if (this.proficiencyLanguage) {
            this.contributeService.insertProficiencyLanguage(this.proficiencyLanguage)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                if (response) {
                    this.credencialsService.currentUser.proficiencyLanguages.push(response);
                    this.proficiencyLanguage = null;
                    this.popupVisible = null;
                    this.languageMissingLevelProficiency = null;
                    this.onCheckLevelProfeciencyAndLoadTranslations();
                }
            }, () => {
                this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorSavingLanguageProficiency'));
            });
        }
    }
    onClickNewLine() {
        const newRegistoSentence = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_7__["SentenceViewModel"]();
        newRegistoSentence.languageId = this.language1Control.value;
        newRegistoSentence.text = '';
        newRegistoSentence.lastSentenceTranslation = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_7__["SentenceViewModel"]();
        newRegistoSentence.lastSentenceTranslation.languageId = this.language2Control.value;
        newRegistoSentence.lastSentenceTranslation.text = '';
        this.listSentencesSpokenLanguage.unshift(newRegistoSentence);
        this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
        this.contributeService.sentenceSelect = newRegistoSentence;
        this.searchSentenceL1Control.disable({ emitEvent: false });
        this.searchSentenceL2Control.disable({ emitEvent: false });
        this.contributeService.projectControl.disable({ emitEvent: false });
        setTimeout(() => {
            this.virtualScroll.scrollToIndex(0);
        }, 250);
    }
    onDeleteItem(translation) {
        if (translation && !translation.id) {
            const index = this.listSentencesSpokenLanguage.indexOf(translation);
            if (index !== -1) {
                this.listSentencesSpokenLanguage.splice(index, 1);
            }
        }
        this.listSentencesSpokenLanguage = this.listSentencesSpokenLanguage.slice();
    }
    removeLanguage([languagesList, languageId]) {
        if (languagesList) {
            return languagesList.filter(x => x.id !== languageId);
        }
        return [];
    }
    filterListSentencesSpokenLanguage() {
        if (!this.listSentencesSpokenLanguage) {
            return [];
        }
        const l1Search = this.searchSentenceL1Control.value.trim();
        const l2Search = this.searchSentenceL2Control.value.trim();
        return this.listSentencesSpokenLanguage.filter(x => (l1Search.length === 0 || !x.id || x.text.includes(l1Search)) &&
            (l2Search.length === 0 || (x.lastSentenceTranslation &&
                (!x.lastSentenceTranslation.id || x.lastSentenceTranslation.text.includes(l2Search)))));
    }
    listenEventEmitters() {
        this.contributeService.projectControl.valueChanges
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            if (value) {
                const project = this.contributeService.projectsList.find(x => x.id === value);
                this.language1Control.setValue(project.language1Id, { emitEvent: false });
                this.language2Control.setValue(project.language2Id, { emitEvent: false });
                this.language1Control.disable({ emitEvent: false });
                this.language2Control.disable({ emitEvent: false });
                this.onCheckLevelProfeciencyAndLoadTranslations();
            }
            else {
                this.language1Control.setValue(null, { emitEvent: false });
                this.language2Control.setValue(null, { emitEvent: false });
                this.language1Control.enable({ emitEvent: false });
                this.language2Control.enable({ emitEvent: false });
                this.onCheckLevelProfeciencyAndLoadTranslations();
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.language1Control.valueChanges, this.language2Control.valueChanges).pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            this.onCheckLevelProfeciencyAndLoadTranslations();
        });
        this.contributeService.fileImportControl.valueChanges
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            if (value) {
                if (value.match('\.txt$')) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        this.sentencesToImport = reader.result.toString().split('\n')
                            .filter(x => x.trim().length > 0)
                            .map(x => {
                            const newSentence = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_7__["SentenceViewModel"]();
                            newSentence.languageId = this.language1Control.value;
                            newSentence.projectId = this.contributeService.projectControl.value;
                            newSentence.text = x.trim();
                            newSentence.userCreationId = this.credencialsService.getCredentials.id;
                            newSentence.userChangeId = this.credencialsService.getCredentials.id;
                            return newSentence;
                        });
                        this.popupFileImportVisible = true;
                    };
                    reader.onerror = () => {
                        console.log(reader.error);
                        this.toastr.error('Error in reading file');
                    };
                    reader.readAsText(this.fileInput.nativeElement.files[0], 'ASCII');
                }
                else {
                    this.toastr.error('File is not valid');
                    this.contributeService.fileImportControl.setValue(null, { emitEvent: false });
                }
            }
        });
    }
};
ContributeTranslateComponent.ɵfac = function ContributeTranslateComponent_Factory(t) { return new (t || ContributeTranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_9__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_10__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"])); };
ContributeTranslateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeTranslateComponent, selectors: [["app-contribute-translate"]], viewQuery: function ContributeTranslateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.virtualScroll = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 70, consts: [["class", "offset-3 col-3 position-absolute top-119", 4, "ngIf"], [1, "row", "m-0", "px-2"], [1, "col", "p-0", "d-flex"], ["valueExpr", "id", "displayExpr", "name", 1, "form-control", 3, "dataSource", "placeholder", "showClearButton", "formControl"], [1, "col-1", "d-flex", "align-items-end", "justify-content-center"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-right", "fa-2x", "text-color"], [1, "row", "m-0", "p-2"], [1, "col", "p-0"], ["type", "text", 1, "form-control", 3, "formControl", "placeholder"], [1, "col-1"], [1, "btn", "btn-primary", "w-100", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-list"], [1, "height-list", "w-100", "pl-2", "pr-scroll", "position-relative"], [1, "h-100", "w-100", 3, "ngClass", "enableUnequalChildrenSizes", "items"], ["scroll", ""], [3, "item", "language1", "language2", "searchL1", "searchL2", "deleteItem", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "visible", "visibleChange", "onHidden", 4, "ngIf"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [3, "dxmousewheel", "mousewheel", 4, "dxTemplate", "dxTemplateOf"], [1, "offset-3", "col-3", "position-absolute", "top-119"], ["type", "file", "accept", ".txt", 1, "invisible", "choose-file", 3, "formControl"], ["fileInput", ""], [1, "btn-sm", "btn-primary", "ml-1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload"], [3, "item", "language1", "language2", "searchL1", "searchL2", "deleteItem"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "visible", "visibleChange", "onHidden"], [4, "dxTemplate", "dxTemplateOf"], [3, "min", "max", "value", "valueChange"], ["showMode", "always", "position", "bottom", 3, "enabled"], [1, "btn", "btn-primary", "col-12", "mt-5", 3, "click"], [3, "dxmousewheel", "mousewheel"], [1, "container-body-popup", "border-top"], [1, "h-100", "w-100", "scrollbar-trach-white", 3, "items"], ["class", "row m-0 d-flex align-items-center lista-item border-bottom", 4, "ngFor", "ngForOf"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons", "border-top"], [1, "col-6"], [1, "btn", "btn-danger", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "row", "m-0", "d-flex", "align-items-center", "lista-item", "border-bottom"], [1, "col-12"]], template: function ContributeTranslateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContributeTranslateComponent_div_0_Template, 7, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dx-select-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dx-select-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateComponent_Template_button_click_18_listener() { return ctx.onClickNewLine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "virtual-scroller", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ContributeTranslateComponent_app_contribute_translate_lista_item_28_Template, 1, 5, "app-contribute-translate-lista-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ngx-spinner", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ContributeTranslateComponent_dx_popup_30_Template, 3, 10, "dx-popup", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "dx-popup", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ContributeTranslateComponent_Template_dx_popup_visibleChange_31_listener($event) { return ctx.popupFileImportVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ContributeTranslateComponent_div_33_Template, 14, 8, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](55, _c1, ctx.router.url, ctx.contributeService.projectControl.value), ctx.showButtonImport, ctx) === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 37, "Shared.Label.SelectLanguage1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](58, _c1, ctx.contributeService == null ? null : ctx.contributeService.languagesList, ctx.language2Control.value), ctx.removeLanguage, ctx))("showClearButton", true)("formControl", ctx.language1Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 43, "Shared.Label.SelectLanguage2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](61, _c1, ctx.contributeService == null ? null : ctx.contributeService.languagesList, ctx.language1Control.value), ctx.removeLanguage, ctx))("showClearButton", true)("formControl", ctx.language2Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 45, "Shared.Label.Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchSentenceL1Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.language1Control.value || !ctx.language2Control.value || ctx.contributeService.sentenceSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 47, "Shared.Label.Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchSentenceL2Control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](64, _c2, ctx.contributeService.sentenceSelect))("enableUnequalChildrenSizes", true)("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](27, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](66, _c3, ctx.listSentencesSpokenLanguage, ctx.searchSentenceL1Control.value, ctx.searchSentenceL2Control.value), ctx.filterListSentencesSpokenLanguage, ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r1.viewPortItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proficiencyLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 53, "ContributeComponent.Label.InsertSentencesConfirmation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", "60%")("height", "90%")("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupFileImportVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxSelectBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_16__["DxTemplateDirective"], _contribute_translate_lista_item_component__WEBPACK_IMPORTED_MODULE_17__["ContributeTranslateListaItemComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxSliderComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__["DxoTooltipComponent"]], pipes: [_shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_19__["FunctionCallPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #001f3f !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2ECC40;\n}\n.scrollbar-trach-white[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #39CCCC !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #85144b;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #001f3f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #7FDBFF;\n}\n.p-scroll[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.pr-scroll[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #DDDDDD;\n}\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198DC8;\n  background: #DDDDDD;\n}\n.container-body-popup[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.text-color[_ngcontent-%COMP%] {\n  color: #999;\n}\n@media screen and (min-height: 451px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: calc(100vh - (110px + (2 * 38px) + (5 * 8px) + 32px + 4px));\n  }\n}\n@media screen and (max-height: 450px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\nvirtual-scroller[_ngcontent-%COMP%] {\n  background: white;\n  overflow-y: scroll !important;\n}\n.choose-file[_ngcontent-%COMP%] {\n  width: 0px !important;\n  height: 0px !important;\n}\n.top-119[_ngcontent-%COMP%] {\n  top: 119px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250cmlidXRlLXRyYW5zbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0Usb0NBQUE7QUNBRjtBREdBO0VBQ0UsVUFBQTtBQ0FGO0FER0EsVUFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNBRjtBREdBO0VBQ0UsOEJBQUE7QUNBRjtBREdBLFdBQUE7QUFDQTtFQUNFLG1CQUFBO0FDQUY7QURHQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNBRjtBRElBO0VBQ0UsbUJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBO0VBQ0UsdUJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBLGNBQUE7QUFrQkEsaUJBQUE7QUFDQTtFQUNFLGdCQVhrQjtFQVlsQixvQkFBQTtFQUNBLGtDQUFBO0FDbEJGO0FEcUJBO0VBQ0UsbUJBeEJhO0FDTWY7QURxQkE7RUFDRSw4QkFBQTtFQUNBLG1CQTdCYTtBQ1dmO0FEcUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRHFCQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ2xCRjtBQXBFQTtFQUNFLFdBQUE7QUF1RUY7QUFwRUE7RUFDRTtJQUNFLG1FQUFBO0VBdUVGO0FBQ0Y7QUFwRUE7RUFDRTtJQUNFLGFEMkNxQjtFQzJCdkI7QUFDRjtBQW5FQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7QUFxRUY7QUFsRUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBcUVGO0FBbEVBO0VBQ0UsVUFBQTtBQXFFRiIsImZpbGUiOiJjb250cmlidXRlLXRyYW5zbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmM2YgIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzJFQ0M0MDtcbn1cblxuLnNjcm9sbGJhci10cmFjaC13aGl0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMzlDQ0NDICFpbXBvcnRhbnQ7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4NTE0NGI7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDFmM2Y7XG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM3RkRCRkY7XG59XG5cbi5wLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLyogVmFyaWFibGVzICovXG4vLyBDb2xvcidzXG4kc2VsZWN0LWNvbG9yOiAjREREREREO1xuJHNlbGVjdC1ib3JkZXItY29sb3I6ICMxOThEQzg7XG5cblxuLy8gSGVpZ2h0J3NcbiRoZWlnaHQtYnRuOiAzOHB4O1xuJGhlaWdodC1pbnB1dDogMzJweDtcbiRoZWlnaHQtbGlzdGEtaXRlbTogNTBweDtcbiRoZWlnaHQtbmF2LWJhcjogMTEwcHg7XG4kaGVpZ2h0LWxpc3QtcmVzcG9uc2l2ZTogNDAwcHg7XG5cbiRpbmRleC1uYXYtYmFyOiAxMDA7XG5cbiRwLTE6IDRweDtcbiRwLTI6IDhweDtcblxuLyogTGlzdHMgU3R5bGVzICovXG4ubGlzdGEtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQtbGlzdGEtaXRlbTtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogJHNlbGVjdC1jb2xvcjtcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRzZWxlY3QtYm9yZGVyLWNvbG9yO1xuICBiYWNrZ3JvdW5kOiAkc2VsZWN0LWNvbG9yO1xufVxuXG4uY29udGFpbmVyLWJvZHktcG9wdXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWYzZiAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMkVDQzQwO1xufVxuXG4uc2Nyb2xsYmFyLXRyYWNoLXdoaXRlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICMzOUNDQ0MgIWltcG9ydGFudDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg1MTQ0Yjtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMWYzZjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM3RkRCRkY7XG59XG5cbi5wLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByLXNjcm9sbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLyogVmFyaWFibGVzICovXG4vKiBMaXN0cyBTdHlsZXMgKi9cbi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0RERERERDtcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThEQzg7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG59XG5cbi5jb250YWluZXItYm9keS1wb3B1cCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wb3B1cC1idXR0b25zIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogIzk5OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQ1MXB4KSB7XG4gIC5oZWlnaHQtbGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDExMHB4ICsgKDIgKiAzOHB4KSArICg1ICogOHB4KSArIDMycHggKyA0cHgpKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5oZWlnaHQtbGlzdCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxufVxudmlydHVhbC1zY3JvbGxlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbn1cblxuLmNob29zZS1maWxlIHtcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9wLTExOSB7XG4gIHRvcDogMTE5cHg7XG59Il19 */"] });
ContributeTranslateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], ContributeTranslateComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeTranslateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute-translate',
                templateUrl: './contribute-translate.component.html',
                styleUrls: ['./contribute-translate.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_9__["CredentialsService"] }, { type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_10__["ContributeService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }]; }, { virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerComponent"]]
        }], fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fileInput']
        }] }); })();


/***/ }),

/***/ "Qx/V":
/*!*********************************************************!*\
  !*** ./src/app/maintenance/viewmodels/userViewModel.ts ***!
  \*********************************************************/
/*! exports provided: UserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
/* harmony import */ var _userRoleViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userRoleViewModel */ "7zW1");

class UserViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.id = registo.id;
            this.name = registo.name;
            this.email = registo.email;
            this.userRoles = registo.userRoles ? registo.userRoles.map(x => new _userRoleViewModel__WEBPACK_IMPORTED_MODULE_0__["UserRoleViewModel"](x)) : [];
        }
    }
}


/***/ }),

/***/ "Sszs":
/*!******************************************************************************************************!*\
  !*** ./src/app/maintenance/maintenance-download-settings/maintenance-download-settings.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MaintenanceDownloadSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceDownloadSettingsComponent", function() { return MaintenanceDownloadSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewmodels/downloadSettingsViewModel */ "VCbl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/maintenance.service */ "T59Z");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");













function MaintenanceDownloadSettingsComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceDownloadSettingsComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onOpenPopupForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.isBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Add", "\n");
} }
function MaintenanceDownloadSettingsComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.downloadSettings == null ? null : ctx_r5.downloadSettings.maxSentencesPerDownload);
} }
function MaintenanceDownloadSettingsComponent_div_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Unlimited");
} }
function MaintenanceDownloadSettingsComponent_div_17_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.downloadSettings == null ? null : ctx_r7.downloadSettings.maxSentencesPerUser);
} }
function MaintenanceDownloadSettingsComponent_div_17_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Unlimited");
} }
function MaintenanceDownloadSettingsComponent_div_17_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.downloadSettings == null ? null : ctx_r9.downloadSettings.maxSentencesL1L2);
} }
function MaintenanceDownloadSettingsComponent_div_17_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Unlimited");
} }
function MaintenanceDownloadSettingsComponent_div_17_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.downloadSettings == null ? null : ctx_r11.downloadSettings.maxDownloadsPerUser);
} }
function MaintenanceDownloadSettingsComponent_div_17_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Unlimited");
} }
const _c0 = function (a0) { return { "lista-item-selected": a0 }; };
function MaintenanceDownloadSettingsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceDownloadSettingsComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onOpenPopupForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MaintenanceDownloadSettingsComponent_div_17_span_2_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MaintenanceDownloadSettingsComponent_div_17_span_3_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MaintenanceDownloadSettingsComponent_div_17_span_5_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MaintenanceDownloadSettingsComponent_div_17_span_6_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MaintenanceDownloadSettingsComponent_div_17_span_8_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MaintenanceDownloadSettingsComponent_div_17_span_9_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MaintenanceDownloadSettingsComponent_div_17_span_11_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MaintenanceDownloadSettingsComponent_div_17_span_12_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx_r1.popupVisible));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxSentencesPerDownload) !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxSentencesPerDownload) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxSentencesPerUser) !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxSentencesPerUser) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxSentencesL1L2) !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxSentencesL1L2) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxDownloadsPerUser) !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r1.downloadSettings == null ? null : ctx_r1.downloadSettings.maxDownloadsPerUser) === null);
} }
function MaintenanceDownloadSettingsComponent_div_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceDownloadSettingsComponent_div_20_ng_container_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceDownloadSettingsComponent_div_20_ng_container_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r16.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Maximum number of sentences per download", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Maximum number of sentences per user", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Maximum number of sentences per L1/L2", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Maximum number of downloads per user", " ");
} }
function MaintenanceDownloadSettingsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaintenanceDownloadSettingsComponent_div_20_ng_container_1_Template, 30, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isBusy && ctx_r2.form);
} }
let MaintenanceDownloadSettingsComponent = class MaintenanceDownloadSettingsComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(formBuilder, toastr, maintenanceService, spinner) {
        super();
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.maintenanceService = maintenanceService;
        this.spinner = spinner;
        this.popupVisible = false;
    }
    ngOnInit() {
        this.loadRegistos();
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    onOpenPopupForm() {
        this.initializeForm();
        this.popupVisible = true;
    }
    onCancel() {
        this.popupVisible = false;
        this.form = null;
    }
    onSave() {
        if (this.form && this.form.valid) {
            const registo = new _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_4__["DownloadSettignsViewModel"]();
            registo.maxSentencesPerDownload = this.form.get('maxSentencesPerDownload').value;
            registo.maxSentencesPerUser = this.form.get('maxSentencesPerUser').value;
            registo.maxSentencesL1L2 = this.form.get('maxSentencesL1L2').value;
            registo.maxDownloadsPerUser = this.form.get('maxDownloadsPerUser').value;
            if (this.downloadSettings) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateDownloadSettings(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.downloadSettings.copyFrom(response);
                    this.popupVisible = false;
                    this.form = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao atualizar configurações de download');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertDownloadSettings(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.downloadSettings = new _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_4__["DownloadSettignsViewModel"](response);
                    this.popupVisible = false;
                    this.form = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao inserir configurações de download');
                });
            }
        }
    }
    loadRegistos() {
        this.spinner.show();
        this.incrementIsBusy();
        this.maintenanceService.getDownloadSettings()
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.downloadSettings = response;
            this.decrementIsBusy();
            this.spinner.hide();
        }, () => {
            this.decrementIsBusy();
            this.spinner.hide();
            this.toastr.error('Erro ao carregar dados');
        });
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            maxSentencesPerDownload: [this.downloadSettings ? this.downloadSettings.maxSentencesPerDownload : null],
            maxSentencesPerUser: [this.downloadSettings ? this.downloadSettings.maxSentencesPerUser : null],
            maxSentencesL1L2: [this.downloadSettings ? this.downloadSettings.maxSentencesL1L2 : null],
            maxDownloadsPerUser: [this.downloadSettings ? this.downloadSettings.maxDownloadsPerUser : null],
        });
    }
};
MaintenanceDownloadSettingsComponent.ɵfac = function MaintenanceDownloadSettingsComponent_Factory(t) { return new (t || MaintenanceDownloadSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_maintenance_service__WEBPACK_IMPORTED_MODULE_7__["MaintenanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"])); };
MaintenanceDownloadSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintenanceDownloadSettingsComponent, selectors: [["app-maintenance-download-settings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 16, consts: [["class", "btn btn-primary position-absolute btn-add", 3, "disabled", "click", 4, "ngIf"], [1, "w-100", "h-100"], [1, "p-scroll"], [1, "row", "m-0", "border-bottom", "bg-white", "lista-row-header"], [1, "col-3", "d-flex", "align-items-center", "border-right"], [1, "col-3", "d-flex", "align-items-center"], [1, "container-list", "bg-white", "position-relative"], ["class", "row m-0 border-bottom lista-item", 3, "ngClass", "click", 4, "ngIf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "btn", "btn-primary", "position-absolute", "btn-add", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-square"], [1, "row", "m-0", "border-bottom", "lista-item", 3, "ngClass", "click"], [4, "ngIf"], [1, "container-form", 3, "formGroup"], ["direction", "vertical"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], [1, "col-9"], [1, "col-3"], ["type", "number", "formControlName", "maxDownloadsPerUser", 1, "form-control"], ["type", "number", "formControlName", "maxSentencesL1L2", 1, "form-control"], ["type", "number", "formControlName", "maxSentencesPerDownload", 1, "form-control"], ["type", "number", "formControlName", "maxSentencesPerUser", 1, "form-control"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], [1, "col-6"], [1, "btn", "btn-danger", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "click"]], template: function MaintenanceDownloadSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MaintenanceDownloadSettingsComponent_button_0_Template, 3, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MaintenanceDownloadSettingsComponent_div_17_Template, 13, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ngx-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "dx-popup", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MaintenanceDownloadSettingsComponent_Template_dx_popup_visibleChange_19_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MaintenanceDownloadSettingsComponent_div_20_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.downloadSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Maximum number of sentences per download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Maximum number of sentences per user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Maximum number of sentences per L1/L2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Maximum number of downloads per user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.downloadSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", "Download settigns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 500)("height", 310)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_11__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxScrollViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]], styles: [".container-list[_ngcontent-%COMP%] {\n  height: calc(100% - 49px);\n  overflow-y: scroll;\n}\n\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.container-form[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n\n.lista-row-header[_ngcontent-%COMP%] {\n  border-left: 2px solid white;\n  height: 49px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  top: 118px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWludGVuYW5jZS1kb3dubG9hZC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoibWFpbnRlbmFuY2UtZG93bmxvYWQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWxpc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ5cHgpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wb3B1cC1idXR0b25zIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNvbnRhaW5lci1mb3JtIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmxpc3RhLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmxpc3RhLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTZmZmY3O1xufVxuXG4ubGlzdGEtaXRlbS1zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzE5OGRjODtcbiAgYmFja2dyb3VuZDogI2U2ZmZmNztcbn1cblxuLmxpc3RhLXJvdy1oZWFkZXIge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDQ5cHg7XG59XG5cbi5idG4tYWRkIHtcbiAgdG9wOiAxMThweDtcbn1cbiJdfQ== */"] });
MaintenanceDownloadSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], MaintenanceDownloadSettingsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaintenanceDownloadSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maintenance-download-settings',
                templateUrl: './maintenance-download-settings.component.html',
                styleUrls: ['./maintenance-download-settings.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_7__["MaintenanceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contribute/services/contribute.service */ "ievF");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/data.service */ "cplz");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "8B9z");












let AppComponent = class AppComponent {
    constructor(contributeService, dataService, toastr, spinner, router, translateService) {
        this.contributeService = contributeService;
        this.dataService = dataService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.translateService = translateService;
        this.translateService.use('pt');
    }
    ngOnInit() {
        this.router.navigate(['']);
        this.loadDadosGeraisAndCurrentUser();
    }
    ngOnDestroy() {
        this.spinner.hide('general');
    }
    loadDadosGeraisAndCurrentUser() {
        this.spinner.show('general');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.contributeService.loadDados(),
            this.dataService.loadCurrentUser()
        ])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
            .subscribe(() => {
            this.spinner.hide('general');
        }, () => {
            this.spinner.hide('general');
            this.toastr.error(this.translateService.instant('AppComponent.Message.ErrorLoadingGeneralData'));
        });
    }
};
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_4__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-body"], ["type", "ball-clip-rotate-pulse", "name", "general"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-spinner", 1);
    } }, directives: [_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #001f3f !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #2ECC40;\n}\n.scrollbar-trach-white[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #39CCCC !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #85144b;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #001f3f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #7FDBFF;\n}\n.p-scroll[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.pr-scroll[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #DDDDDD;\n}\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198DC8;\n  background: #DDDDDD;\n}\n.container-body-popup[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.container-body[_ngcontent-%COMP%] {\n  margin-top: 110px;\n  height: calc(100vh - 110px);\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLFVBQUE7QUNBRjtBREdBLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FDQUY7QURHQTtFQUNFLDhCQUFBO0FDQUY7QURHQSxXQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0FGO0FER0Esb0JBQUE7QUFDQTtFQUNFLG1CQUFBO0FDQUY7QURJQTtFQUNFLG1CQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLHVCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQSxjQUFBO0FBa0JBLGlCQUFBO0FBQ0E7RUFDRSxnQkFYa0I7RUFZbEIsb0JBQUE7RUFDQSxrQ0FBQTtBQ2xCRjtBRHFCQTtFQUNFLG1CQXhCYTtBQ01mO0FEcUJBO0VBQ0UsOEJBQUE7RUFDQSxtQkE3QmE7QUNXZjtBRHFCQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNsQkY7QURxQkE7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNsQkY7QUFwRUE7RUFDRSxpQkRxRGU7RUNwRGYsMkJBQUE7RUFDQSxnQkFBQTtBQXVFRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICMyRUNDNDA7XG59XG5cbi5zY3JvbGxiYXItdHJhY2gtd2hpdGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzM5Q0NDQyAhaW1wb3J0YW50O1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODUxNDRiO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAxZjNmO1xufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjN0ZEQkZGO1xufVxuXG4ucC1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wci1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi8qIFZhcmlhYmxlcyAqL1xuLy8gQ29sb3Inc1xuJHNlbGVjdC1jb2xvcjogI0RERERERDtcbiRzZWxlY3QtYm9yZGVyLWNvbG9yOiAjMTk4REM4O1xuXG5cbi8vIEhlaWdodCdzXG4kaGVpZ2h0LWJ0bjogMzhweDtcbiRoZWlnaHQtaW5wdXQ6IDMycHg7XG4kaGVpZ2h0LWxpc3RhLWl0ZW06IDUwcHg7XG4kaGVpZ2h0LW5hdi1iYXI6IDExMHB4O1xuJGhlaWdodC1saXN0LXJlc3BvbnNpdmU6IDQwMHB4O1xuXG4kaW5kZXgtbmF2LWJhcjogMTAwO1xuXG4kcC0xOiA0cHg7XG4kcC0yOiA4cHg7XG5cbi8qIExpc3RzIFN0eWxlcyAqL1xuLmxpc3RhLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0LWxpc3RhLWl0ZW07XG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdGEtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICRzZWxlY3QtY29sb3I7XG59XG5cbi5saXN0YS1pdGVtLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkc2VsZWN0LWJvcmRlci1jb2xvcjtcbiAgYmFja2dyb3VuZDogJHNlbGVjdC1jb2xvcjtcbn1cblxuLmNvbnRhaW5lci1ib2R5LXBvcHVwIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnBvcHVwLWJ1dHRvbnMge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmM2YgIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzJFQ0M0MDtcbn1cblxuLnNjcm9sbGJhci10cmFjaC13aGl0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMzlDQ0NDICFpbXBvcnRhbnQ7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4NTE0NGI7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDFmM2Y7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjN0ZEQkZGO1xufVxuXG4ucC1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wci1zY3JvbGwge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi8qIFZhcmlhYmxlcyAqL1xuLyogTGlzdHMgU3R5bGVzICovXG4ubGlzdGEtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdGEtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNEREREREQ7XG59XG5cbi5saXN0YS1pdGVtLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk4REM4O1xuICBiYWNrZ3JvdW5kOiAjREREREREO1xufVxuXG4uY29udGFpbmVyLWJvZHktcG9wdXAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jb250YWluZXItYm9keSB7XG4gIG1hcmdpbi10b3A6IDExMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"] });
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], AppComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_4__["ContributeService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "T59Z":
/*!*************************************************************!*\
  !*** ./src/app/maintenance/services/maintenance.service.ts ***!
  \*************************************************************/
/*! exports provided: MaintenanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceService", function() { return MaintenanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewmodels/downloadSettingsViewModel */ "VCbl");
/* harmony import */ var _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewmodels/languageViewModel */ "u9Jt");
/* harmony import */ var _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewmodels/projectViewModel */ "uXFV");
/* harmony import */ var _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../viewmodels/userViewModel */ "Qx/V");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/http.service */ "bUwk");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");









class MaintenanceService {
    constructor(httpService, credentialsService) {
        this.httpService = httpService;
        this.credentialsService = credentialsService;
        this.url = 'Maintenance/';
    }
    /* GET */
    getDownloadSettings() {
        return this.httpService.get(this.url + 'downloadsettings')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_2__["DownloadSettignsViewModel"](response) : null;
        }));
    }
    getLanguages() {
        return this.httpService.get(this.url + 'languages')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? response.map(x => new _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_3__["LanguageViewModel"](x)) : [];
        }));
    }
    getProjects() {
        return this.httpService.get(this.url + 'projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? response.map(x => new _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_4__["ProjectViewModel"](x)) : [];
        }));
    }
    getUsers() {
        return this.httpService.get(this.url + 'users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? response.map(x => new _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__["UserViewModel"](x)) : [];
        }));
    }
    getUsersLight() {
        return this.httpService.get(this.url + 'userslight');
    }
    /* POST */
    insertDownloadSettings(registo) {
        const body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'downloadsettings', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_2__["DownloadSettignsViewModel"](response) : null;
        }));
    }
    insertLanguage(registo) {
        const body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'language', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_3__["LanguageViewModel"](response) : null;
        }));
    }
    insertProject(registo) {
        if (this.credentialsService.getCredentials) {
            registo.userCreationId = this.credentialsService.getCredentials.id;
            registo.userChangeId = this.credentialsService.getCredentials.id;
        }
        const body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'project', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_4__["ProjectViewModel"](response) : null;
        }));
    }
    insertUser(registo) {
        const body = JSON.stringify(registo);
        return this.httpService.post(this.url + 'user', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__["UserViewModel"](response) : null;
        }));
    }
    /* PUT */
    updateDownloadSettings(registo) {
        const body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'downloadsettings', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_downloadSettingsViewModel__WEBPACK_IMPORTED_MODULE_2__["DownloadSettignsViewModel"](response) : null;
        }));
    }
    updateLanguage(registo) {
        const body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'language', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_3__["LanguageViewModel"](response) : null;
        }));
    }
    updateProject(registo) {
        if (this.credentialsService.getCredentials) {
            registo.userChangeId = this.credentialsService.getCredentials.id;
        }
        const body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'project', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_4__["ProjectViewModel"](response) : null;
        }));
    }
    updateUser(registo) {
        const body = JSON.stringify(registo);
        return this.httpService.put(this.url + 'user', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response ? new _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__["UserViewModel"](response) : null;
        }));
    }
}
MaintenanceService.ɵfac = function MaintenanceService_Factory(t) { return new (t || MaintenanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_7__["CredentialsService"])); };
MaintenanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaintenanceService, factory: MaintenanceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintenanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_7__["CredentialsService"] }]; }, null); })();


/***/ }),

/***/ "UZT+":
/*!**************************************************************************************!*\
  !*** ./src/app/maintenance/maintenance-languages/maintenance-languages.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MaintenanceLanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceLanguagesComponent", function() { return MaintenanceLanguagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../viewmodels/languageViewModel */ "u9Jt");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/maintenance.service */ "T59Z");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















const _c0 = function (a0) { return { "lista-item-selected": a0 }; };
function MaintenanceLanguagesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceLanguagesComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const language_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSelectItem(language_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx_r0.currentLanguage === language_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r2 == null ? null : language_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r2 == null ? null : language_r2.abbreviation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 4, language_r2 == null ? null : language_r2.type, ctx_r0.getTypeLanguageDescr, ctx_r0), " ");
} }
function MaintenanceLanguagesComponent_div_19_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.Message.RequiredField"), " ");
} }
function MaintenanceLanguagesComponent_div_19_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.Message.RequiredField"), " ");
} }
function MaintenanceLanguagesComponent_div_19_ng_container_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHARED.Message.RequiredField"), " ");
} }
function MaintenanceLanguagesComponent_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MaintenanceLanguagesComponent_div_19_ng_container_1_div_8_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MaintenanceLanguagesComponent_div_19_ng_container_1_div_14_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "dx-select-box", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MaintenanceLanguagesComponent_div_19_ng_container_1_div_20_Template, 3, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceLanguagesComponent_div_19_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceLanguagesComponent_div_19_ng_container_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Name", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted && ctx_r6.form.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Abbreviation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted && ctx_r6.form.get("abbreviation").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Type", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r6.typesLanguage)("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted && ctx_r6.form.get("type").hasError("required"));
} }
function MaintenanceLanguagesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaintenanceLanguagesComponent_div_19_ng_container_1_Template, 28, 9, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isBusy && ctx_r1.form);
} }
let MaintenanceLanguagesComponent = class MaintenanceLanguagesComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(formBuilder, toastr, maintenanceService, spinner) {
        super();
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.maintenanceService = maintenanceService;
        this.spinner = spinner;
        this.currentLanguage = null;
        this.popupVisible = false;
        this.isFormSubmitted = false;
        this.typesLanguage = [
            { id: 1, descr: 'Spoken Language' },
            { id: 2, descr: 'Sign Language' }
        ];
    }
    ngOnInit() {
        this.loadRegistos();
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    onAddLanguage() {
        const newLanguage = new _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_5__["LanguageViewModel"]();
        this.onSelectItem(newLanguage);
    }
    onSelectItem(language) {
        this.isFormSubmitted = false;
        this.currentLanguage = language;
        this.initializeForm();
        this.popupVisible = true;
    }
    onCancel() {
        this.popupVisible = false;
        this.form = null;
        this.currentLanguage = null;
    }
    onSave() {
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            const registo = new _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_5__["LanguageViewModel"]();
            registo.id = this.form.get('id').value;
            registo.name = this.form.get('name').value;
            registo.abbreviation = this.form.get('abbreviation').value;
            registo.type = this.form.get('type').value;
            if (this.currentLanguage && this.currentLanguage.id) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateLanguage(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.currentLanguage.copyFrom(response);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentLanguage = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao atualizar a língua');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertLanguage(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.currentLanguage = new _viewmodels_languageViewModel__WEBPACK_IMPORTED_MODULE_5__["LanguageViewModel"](response);
                    this.listLanguages.push(this.currentLanguage);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentLanguage = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao inserir nova língua');
                });
            }
        }
    }
    getTypeLanguageDescr(id) {
        const typeLanguage = this.typesLanguage.find(x => x.id === id);
        return typeLanguage ? typeLanguage.descr : '';
    }
    loadRegistos() {
        this.spinner.show();
        this.incrementIsBusy();
        this.maintenanceService.getLanguages()
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.listLanguages = response;
            this.decrementIsBusy();
            this.spinner.hide();
        }, () => {
            this.decrementIsBusy();
            this.spinner.hide();
            this.toastr.error('Erro ao carregar dados');
        });
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            id: [this.currentLanguage.id],
            name: [this.currentLanguage.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            abbreviation: [this.currentLanguage.abbreviation, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: [this.currentLanguage.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
};
MaintenanceLanguagesComponent.ɵfac = function MaintenanceLanguagesComponent_Factory(t) { return new (t || MaintenanceLanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_maintenance_service__WEBPACK_IMPORTED_MODULE_7__["MaintenanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"])); };
MaintenanceLanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintenanceLanguagesComponent, selectors: [["app-maintenance-languages"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 16, consts: [[1, "btn", "btn-primary", "position-absolute", "btn-add", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-square"], [1, "w-100", "h-100"], [1, "p-scroll"], [1, "row", "m-0", "border-bottom", "bg-white", "lista-row-header"], [1, "col-4", "d-flex", "align-items-center", "border-right"], [1, "col-4", "d-flex", "align-items-center"], [1, "container-list", "bg-white", "position-relative"], ["class", "row m-0 border-bottom lista-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "row", "m-0", "border-bottom", "lista-item", 3, "ngClass", "click"], [4, "ngIf"], [1, "container-form", 3, "formGroup"], ["direction", "vertical"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], [1, "col-4"], [1, "col-8"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "alert alert-danger mt-1 mb-0 p-1", 4, "ngIf"], ["type", "text", "formControlName", "abbreviation", 1, "form-control"], ["valueExpr", "id", "displayExpr", "descr", "placeholder", "Selecionar", "formControlName", "type", 1, "form-control", 3, "dataSource", "showClearButton"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], [1, "col-6"], [1, "btn", "btn-danger", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "alert", "alert-danger", "mt-1", "mb-0", "p-1"]], template: function MaintenanceLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceLanguagesComponent_Template_button_click_0_listener() { return ctx.onAddLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MaintenanceLanguagesComponent_div_16_Template, 8, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ngx-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "dx-popup", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MaintenanceLanguagesComponent_Template_dx_popup_visibleChange_18_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaintenanceLanguagesComponent_div_19_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Add", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Abbreviation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listLanguages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", "Language Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 500)("height", 370)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_11__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxScrollViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxComponent"]], pipes: [_shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_12__["FunctionCallPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".container-list[_ngcontent-%COMP%] {\n  height: calc(100% - 49px);\n  overflow-y: scroll;\n}\n\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.container-form[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n\n.lista-row-header[_ngcontent-%COMP%] {\n  border-left: 2px solid white;\n  height: 49px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  top: 118px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWludGVuYW5jZS1sYW5ndWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6Im1haW50ZW5hbmNlLWxhbmd1YWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDlweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnBvcHVwLWJ1dHRvbnMge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY29udGFpbmVyLWZvcm0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubGlzdGEtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdGEtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNmZmZjc7XG59XG5cbi5saXN0YS1pdGVtLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk4ZGM4O1xuICBiYWNrZ3JvdW5kOiAjZTZmZmY3O1xufVxuXG4ubGlzdGEtcm93LWhlYWRlciB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNDlweDtcbn1cblxuLmJ0bi1hZGQge1xuICB0b3A6IDExOHB4O1xufVxuIl19 */"] });
MaintenanceLanguagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], MaintenanceLanguagesComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaintenanceLanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maintenance-languages',
                templateUrl: './maintenance-languages.component.html',
                styleUrls: ['./maintenance-languages.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_7__["MaintenanceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "VCbl":
/*!*********************************************************************!*\
  !*** ./src/app/maintenance/viewmodels/downloadSettingsViewModel.ts ***!
  \*********************************************************************/
/*! exports provided: DownloadSettignsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadSettignsViewModel", function() { return DownloadSettignsViewModel; });
class DownloadSettignsViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.maxSentencesPerDownload = registo.maxSentencesPerDownload;
            this.maxSentencesPerUser = registo.maxSentencesPerUser;
            this.maxSentencesL1L2 = registo.maxSentencesL1L2;
            this.maxDownloadsPerUser = registo.maxDownloadsPerUser;
        }
    }
}


/***/ }),

/***/ "Vy8h":
/*!*****************************************!*\
  !*** ./src/app/shared/baseComponent.ts ***!
  \*****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
class BaseComponent {
    constructor() {
        this.isBusy = 0;
    }
    decrementIsBusy() {
        this.isBusy--;
    }
    incrementIsBusy() {
        this.isBusy++;
    }
}


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseComponent */ "Vy8h");
/* harmony import */ var _signin_signup_signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signin-signup/signin-form/viewmodels/userViewModel */ "e72g");
/* harmony import */ var _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contribute/services/contribute.service */ "ievF");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/credentials.service */ "DR2l");
/* harmony import */ var _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signin-signup/signup-form/services/signup.service */ "M1mf");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/pipes/functionCall.pipe */ "YgGP");

















function ProfileComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function ProfileComponent_div_4_div_38_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function ProfileComponent_div_4_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dx-select-box", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_4_div_38_div_5_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dx-slider", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_4_div_38_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r5 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.removeProficiencyLanguage(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_6_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, "Shared.Label.SelectLanguage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c0, ctx_r3.contributeService.languagesList, i_r5), ctx_r3.filterLanguages, ctx_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isFormSubmitted && item_r4.get("languageId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", 0)("max", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_6_0 = ctx_r3.formArrayProficiencyLanguagesControls()[i_r5].get("levelProficiency")) == null ? null : tmp_6_0.value);
} }
function ProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_4_div_12_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_4_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openFormChangePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_4_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.addProficiencyLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProfileComponent_div_4_div_38_Template, 13, 16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_4_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSaveChangesProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_10_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 14, "NavBarComponent.Label.Profile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 16, "Shared.Label.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 18, "Shared.Label.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 22, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 24, "Shared.Label.Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 26, "ProfileComponent.Label.ChangePassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 28, "Shared.Label.ProficiencyLanguages"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.form == null ? null : (tmp_10_0 = ctx_r0.form.get("proficiencyLanguages")) == null ? null : tmp_10_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 30, "Shared.Label.Add"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formArrayProficiencyLanguagesControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 32, "Shared.Label.Save"), " ");
} }
function ProfileComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_7_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_7_ng_container_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r14.formChangePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "ProfileComponent.Label.OldPassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "ProfileComponent.Label.NewPassword"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, "ProfileComponent.Label.NewPasswordAgain"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 12, "Shared.Label.Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 14, "Shared.Label.Save"), " ");
} }
function ProfileComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_7_ng_container_1_Template, 30, 16, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isBusy && ctx_r1.formChangePassword);
} }
let ProfileComponent = class ProfileComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(contributeService, credentialsService, formBuilder, signUpService, toastr, translateService) {
        super();
        this.contributeService = contributeService;
        this.credentialsService = credentialsService;
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.isFormSubmitted = false;
        this.popupVisible = false;
    }
    formArrayProficiencyLanguagesControls() {
        return this.form.get('proficiencyLanguages').controls;
    }
    ngOnInit() {
        this.initializeForm();
    }
    addProficiencyLanguage() {
        const newFormGroup = this.formBuilder.group({
            userId: [this.credentialsService.getCredentials.id],
            languageId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            levelProficiency: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isNew: true
        });
        this.form.controls.proficiencyLanguages.insert(0, newFormGroup);
        if (this.form.controls.proficiencyLanguages.length > 1) {
            this.form.get('proficiencyLanguages.1.languageId').disable();
        }
    }
    removeProficiencyLanguage(index) {
        if (this.formArrayProficiencyLanguagesControls()[index].get('isNew').value) {
            this.form.controls.proficiencyLanguages.controls.splice(index, 1);
            this.form.controls.proficiencyLanguages.updateValueAndValidity();
            if (this.form.controls.proficiencyLanguages.length > 0 && this.form.get('proficiencyLanguages.0.isNew').value) {
                this.form.get('proficiencyLanguages.0.languageId').enable();
            }
            this.contributeService.languagesList = this.contributeService.languagesList.slice();
        }
        else {
            const userId = this.formArrayProficiencyLanguagesControls()[index].get('userId').value;
            const languageId = this.formArrayProficiencyLanguagesControls()[index].get('languageId').value;
            this.signUpService.existsSomeSentenceUserIdAndLanguageId(userId, languageId)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                if (!response) {
                    this.form.controls.proficiencyLanguages.controls.splice(index, 1);
                    this.form.controls.proficiencyLanguages.updateValueAndValidity();
                    if (this.form.controls.proficiencyLanguages.length > 0 && this.form.get('proficiencyLanguages.0.isNew').value) {
                        this.form.get('proficiencyLanguages.0.languageId').enable();
                    }
                    this.contributeService.languagesList = this.contributeService.languagesList.slice();
                }
                else {
                    this.toastr.warning(this.translateService.instant('ProfileComponent.Message.NotPossibleRemoveLanguageProficiency'));
                }
            });
        }
    }
    filterLanguages([languages, index]) {
        if (!languages) {
            return [];
        }
        const languagesSelected = this.form.get('proficiencyLanguages').controls.map(x => x.get('languageId').value);
        languagesSelected.splice(index, 1);
        return languages.filter(x => !languagesSelected.includes(x.id));
    }
    openFormChangePassword() {
        this.formChangePassword = this.formBuilder.group({
            oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            newPasswordAgain: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }, { validator: this.samePassword });
        this.popupVisible = true;
    }
    onCancel() {
        this.popupVisible = false;
        this.formChangePassword = null;
    }
    onSave() {
        this.isFormSubmitted = true;
        if (this.formChangePassword && this.formChangePassword.valid) {
            const changePassword = {
                email: this.credentialsService.getCredentials.email,
                oldPassword: this.formChangePassword.get('oldPassword').value,
                newPassword: this.formChangePassword.get('newPassword').value
            };
            this.incrementIsBusy();
            this.signUpService.changePassword(changePassword)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                if (response) {
                    this.popupVisible = false;
                    this.formChangePassword = null;
                    this.toastr.success(this.translateService.instant('ProfileComponent.Message.PasswordSuccessfullyChanged'));
                }
                else {
                    this.toastr.warning(this.translateService.instant('ProfileComponent.Message.InvalidPassword'));
                }
                this.decrementIsBusy();
            }, () => {
                this.decrementIsBusy();
                this.toastr.error(this.translateService.instant('ProfileComponent.Message.ErrorChangingPassword'));
            });
        }
    }
    onSaveChangesProfile() {
        if (this.form && this.form.valid) {
            const user = this.saveFormValues();
            this.incrementIsBusy();
            this.signUpService.updateProfile(user)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((userResponse) => {
                this.decrementIsBusy();
                this.credentialsService.currentUser.copyFrom(userResponse);
                this.initializeForm();
                this.toastr.success(this.translateService.instant('ProfileComponent.Message.ProfileUpdatedSuccessfully'));
            }, () => {
                this.decrementIsBusy();
                this.toastr.error(this.translateService.instant('ProfileComponent.Message.ErrorUpdatingProfile'));
            });
        }
    }
    initializeForm() {
        const currentUser = this.credentialsService.currentUser;
        this.form = this.formBuilder.group({
            name: [currentUser.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [{ value: currentUser.email, disabled: true }],
            proficiencyLanguages: this.formBuilder
                .array((currentUser.proficiencyLanguages || [])
                .map(x => this.formBuilder.group({
                userId: [x.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                languageId: [{ value: x.languageId, disabled: true }],
                levelProficiency: [x.levelProficiency, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                isNew: false
            })))
        });
    }
    samePassword(control) {
        if (!control.get('newPassword').hasError('required') && !control.get('newPasswordAgain').hasError('required')) {
            if (control.get('newPassword').value !== control.get('newPasswordAgain').value) {
                return { isNotEqual: true };
            }
        }
        return null;
    }
    saveFormValues() {
        const userProfile = new _signin_signup_signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__["UserViewModel"]();
        userProfile.id = this.credentialsService.getCredentials.id;
        userProfile.name = this.form.controls.name.value;
        userProfile.email = this.form.controls.email.value;
        userProfile.proficiencyLanguages = this.formArrayProficiencyLanguagesControls()
            .map(x => {
            return {
                userId: x.controls.userId.value,
                languageId: x.controls.languageId.value,
                levelProficiency: x.controls.levelProficiency.value
            };
        });
        return userProfile;
    }
};
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_6__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_7__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_8__["SignUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "register", "h-100"], [1, "row", "h-100"], [1, "d-none", "d-md-block", "col-md-3", "h-100"], [1, "col-12", "col-md-9", "register-right", "h-100"], ["class", "container-form", 4, "ngIf"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "container-form"], [1, "text-center"], [1, "row", 3, "formGroup"], [1, "col-12"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger mt-1 p-1", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "form-group", "d-flex", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-primary", "ml-auto", 3, "click"], [1, "col-12", "form-group"], [1, "border-header"], [1, "d-flex", "align-items-center", "p-2"], [1, "m-0"], ["type", "button", 1, "btn", "btn-outline-primary", "ml-auto", 3, "disabled", "click"], ["formArrayName", "proficiencyLanguages"], ["class", "d-flex align-items-top justify-content-center list-item p-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "alert", "alert-danger", "mt-1", "p-1"], [1, "d-flex", "align-items-top", "justify-content-center", "list-item", "p-2", 3, "formGroupName"], [1, "col-4", "pl-0"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "languageId", 1, "form-control", 3, "dataSource", "placeholder"], ["class", "alert alert-danger mt-1 p-1 mb-0", 4, "ngIf"], [1, "col-6", "pl-0"], ["formControlName", "levelProficiency", 3, "min", "max"], [1, "col-1", "p-0", "levelProficiencyValue", "d-flex", "align-items-center", "justify-content-center"], [1, "col-1", "pr-0"], ["type", "button", 1, "btn", "btn-outline-danger", "w-100", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "alert", "alert-danger", "mt-1", "p-1", "mb-0"], [4, "ngIf"], [1, "container-form-popup", 3, "formGroup"], ["direction", "vertical"], [1, "row", "pt-2", "m-0", "mb-2", "d-flex", "align-items-center"], [1, "col-6"], ["type", "password", "formControlName", "oldPassword", 1, "form-control"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "newPasswordAgain", 1, "form-control"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], [1, "btn", "btn-danger", "w-100", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 43, 34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dx-popup", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ProfileComponent_Template_dx_popup_visibleChange_5_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, "ProfileComponent.Label.ChangePassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 500)("height", 310)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__["DxTemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxSliderComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxScrollViewComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_14__["FunctionCallPipe"]], styles: [".register[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n  padding: 30px 15px;\n}\n\n.register-right[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n  height: 100%;\n  overflow-y: auto;\n  padding-bottom: 20px;\n}\n\n.container-form[_ngcontent-%COMP%] {\n  padding-left: 90px;\n}\n\n.border-header[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #ced4da;\n}\n\n.list-item[_ngcontent-%COMP%]   .levelProficiencyValue[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.25em;\n  height: 35px;\n  opacity: 0.5;\n}\n\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.heiht-38[_ngcontent-%COMP%] {\n  height: 38px;\n}\n\n.container-list[_ngcontent-%COMP%] {\n  height: calc(100% - 49px);\n  overflow-y: scroll;\n}\n\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.container-form-popup[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyREFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFBSjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQURGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcbiAgcGFkZGluZzogMzBweCAxNXB4O1xufVxuXG4ucmVnaXN0ZXItcmlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGFpbmVyLWZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG59XG5cbi5ib3JkZXItaGVhZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjZWQ0ZGE7XG5cbiAgLmxldmVsUHJvZmljaWVuY3lWYWx1ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG9wYWNpdHk6IDAuNVxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLmhlaWh0LTM4IHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4uY29udGFpbmVyLWxpc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ5cHgpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5wb3B1cC1idXR0b25zIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNvbnRhaW5lci1mb3JtLXBvcHVwIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiJdfQ== */"] });
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], ProfileComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_6__["ContributeService"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_7__["CredentialsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_8__["SignUpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "XqVx":
/*!****************************************************!*\
  !*** ./src/app/contribute/contribute.component.ts ***!
  \****************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseComponent */ "Vy8h");
/* harmony import */ var _signin_signup_signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signin-signup/signin-form/viewmodels/userViewModel */ "e72g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/contribute.service */ "ievF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/services/credentials.service */ "DR2l");
/* harmony import */ var _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../signin-signup/signup-form/services/signup.service */ "M1mf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/pipes/functionCall.pipe */ "YgGP");

















function ContributeComponent_dx_select_box_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dx-select-box", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 8, "Shared.Label.SelectProject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 4, ctx_r0.contributeService == null ? null : ctx_r0.contributeService.projectsList, ctx_r0.filterProjects, ctx_r0))("showClearButton", true)("formControl", ctx_r0.contributeService.projectControl);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ContributeComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onOpenPage("projects"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r1.router.url.includes("contribute/projects")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Shared.Label.Projects"), " ");
} }
function ContributeComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onOpenPage("download"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r2.router.url.includes("contribute/download")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Shared.Label.Download"), " ");
} }
let ContributeComponent = class ContributeComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(router, contributeService, toastr, credentialsService, signUpService, route) {
        super();
        this.router = router;
        this.contributeService = contributeService;
        this.toastr = toastr;
        this.credentialsService = credentialsService;
        this.signUpService = signUpService;
        this.route = route;
    }
    ngOnInit() {
        this.isAuthenticate = this.credentialsService.isAuthenticated();
        this.loadDados();
    }
    onOpenPage(opt) {
        switch (opt) {
            case 'translate':
                this.router.navigate(['translate'], { relativeTo: this.route });
                break;
            case 'projects':
                this.router.navigate(['projects'], { relativeTo: this.route });
                break;
            case 'search':
                this.router.navigate(['search'], { relativeTo: this.route });
                break;
            case 'download':
                this.router.navigate(['download'], { relativeTo: this.route });
                break;
            default:
                break;
        }
    }
    filterProjects(listProjects) {
        if (!listProjects) {
            return [];
        }
        const currentUserProjectsId = (this.credentialsService.currentUser && this.credentialsService.currentUser.userProjects) ?
            this.credentialsService.currentUser.userProjects.filter(x => x.isAutorized).map(x => x.projectId) : [];
        return listProjects.filter(x => currentUserProjectsId.includes(x.id));
    }
    loadDados() {
        this.incrementIsBusy();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.contributeService.loadDados(),
            this.isAuthenticate ? this.signUpService.emailExists(this.credentialsService.getCredentials.email) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
        ])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
            .subscribe(([response, user]) => {
            if (response) {
                this.contributeService.projectsList = response.projects;
                this.contributeService.languagesList = response.languages;
                this.contributeService.loadDadosCompleted = true;
                this.contributeService.projectControl.enable({ emitEvent: false });
            }
            this.credentialsService.currentUser = user ? new _signin_signup_signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_5__["UserViewModel"](user) : null;
            this.decrementIsBusy();
        }, () => {
            this.toastr.error('Erro ao carregar dados');
            this.decrementIsBusy();
        });
    }
};
ContributeComponent.ɵfac = function ContributeComponent_Factory(t) { return new (t || ContributeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_9__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_10__["SignUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
ContributeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeComponent, selectors: [["app-contribute"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 15, consts: [[1, "container-contribute"], [1, "row", "m-0", "p-2"], ["class", "form-control col-3", "valueExpr", "id", "displayExpr", "name", 3, "dataSource", "showClearButton", "placeholder", "formControl", 4, "ngIf"], ["role", "group", 1, "btn-group", "ml-auto"], ["type", "button", 1, "btn", "btn-secondary", 3, "ngClass", "click"], ["type", "button", "class", "btn btn-secondary", 3, "ngClass", "click", 4, "ngIf"], ["valueExpr", "id", "displayExpr", "name", 1, "form-control", "col-3", 3, "dataSource", "showClearButton", "placeholder", "formControl"]], template: function ContributeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContributeComponent_dx_select_box_2_Template, 3, 10, "dx-select-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeComponent_Template_button_click_4_listener() { return ctx.onOpenPage("translate"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContributeComponent_button_7_Template, 3, 6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeComponent_Template_button_click_8_listener() { return ctx.onOpenPage("search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContributeComponent_button_11_Template, 3, 6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticate && !ctx.isBusy && !ctx.router.url.includes("contribute/projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.router.url.includes("contribute/translate")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, "Shared.Label.Translate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.credentialsService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.router.url.includes("contribute/search")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, "Shared.Label.Search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.credentialsService.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxSelectBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_15__["FunctionCallPipe"]], styles: [".container-contribute[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRyaWJ1dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiY29udHJpYnV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY29udHJpYnV0ZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiJdfQ== */"] });
ContributeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], ContributeComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute',
                templateUrl: './contribute.component.html',
                styleUrls: ['./contribute.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_9__["CredentialsService"] }, { type: _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_10__["SignUpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Y4+Y":
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class NotificationService {
    constructor(http) {
        this.http = http;
        this.translationLikeAdded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.translationLikeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .withUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrlNotification)
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information)
            .build();
        this.connection.onclose(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.startConnection();
        }));
        this.listenNotifications();
        this.startConnection();
    }
    listenNotifications() {
        this.connection.on('SendTranslationLikeAdd', (registo) => {
            this.translationLikeAdded.next(registo);
        });
        this.connection.on('SendTranslationLikeUpdate', (registo) => {
            this.translationLikeUpdated.next(registo);
        });
    }
    // Start the connection
    startConnection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.connection.start();
            }
            catch (err) {
                console.log(err);
                setTimeout(() => this.startConnection(), 5000);
            }
        });
    }
    sendTranslationLikeAdd(registo) {
        this.connection.send('SendTranslationLikeAdd', registo);
    }
    sendTranslationLikeUpdate(registo) {
        this.connection.send('SendTranslationLikeUpdate', registo);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YgGP":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/functionCall.pipe.ts ***!
  \***************************************************/
/*! exports provided: FunctionCallPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionCallPipe", function() { return FunctionCallPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FunctionCallPipe {
    transform(value, handler, context) {
        if (context) {
            return handler.call(context, value);
        }
        return handler(value);
    }
}
FunctionCallPipe.ɵfac = function FunctionCallPipe_Factory(t) { return new (t || FunctionCallPipe)(); };
FunctionCallPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "functionCall", type: FunctionCallPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionCallPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'functionCall'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contribute/contribute.component */ "XqVx");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _signin_signup_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signin-signup/signin-form/signin-form.component */ "xVkl");
/* harmony import */ var _signin_signup_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signin-signup/signup-form/signup-form.component */ "mIb8");
/* harmony import */ var _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signin-signup/signin-signup.component */ "F6YZ");
/* harmony import */ var _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signin-signup/signup-form/services/signup.service */ "M1mf");
/* harmony import */ var _contribute_translate_contribute_translate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contribute/translate/contribute-translate.component */ "Q+cc");
/* harmony import */ var _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contribute/services/contribute.service */ "ievF");
/* harmony import */ var _contribute_translate_contribute_translate_lista_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contribute/translate/contribute-translate-lista-item.component */ "rW7k");
/* harmony import */ var _contribute_search_contribute_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contribute/search/contribute-search.component */ "F/X4");
/* harmony import */ var _contribute_search_contribute_search_lista_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contribute/search/contribute-search-lista-item.component */ "e1xN");
/* harmony import */ var _contribute_download_contribute_download_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contribute/download/contribute-download.component */ "Po4a");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "yhB2");
/* harmony import */ var _maintenance_maintenance_download_settings_maintenance_download_settings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./maintenance/maintenance-download-settings/maintenance-download-settings.component */ "Sszs");
/* harmony import */ var _maintenance_services_maintenance_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./maintenance/services/maintenance.service */ "T59Z");
/* harmony import */ var _maintenance_maintenance_languages_maintenance_languages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./maintenance/maintenance-languages/maintenance-languages.component */ "UZT+");
/* harmony import */ var _maintenance_maintenance_projects_maintenance_projects_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./maintenance/maintenance-projects/maintenance-projects.component */ "4Vrr");
/* harmony import */ var _maintenance_maintenance_users_maintenance_users_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./maintenance/maintenance-users/maintenance-users.component */ "w4RS");
/* harmony import */ var _contribute_projects_contribute_projects_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./contribute/projects/contribute-projects.component */ "jqbX");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./core/services/notification.service */ "Y4+Y");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");






































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_services_notification_service__WEBPACK_IMPORTED_MODULE_33__["NotificationService"],
        _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_18__["SignUpService"],
        _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_20__["ContributeService"],
        _maintenance_services_maintenance_service__WEBPACK_IMPORTED_MODULE_27__["MaintenanceService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                    useFactory: httpTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                },
                defaultLanguage: 'en'
            }),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_32__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__["ContributeComponent"],
        _contribute_translate_contribute_translate_component__WEBPACK_IMPORTED_MODULE_19__["ContributeTranslateComponent"],
        _contribute_translate_contribute_translate_lista_item_component__WEBPACK_IMPORTED_MODULE_21__["ContributeTranslateListaItemComponent"],
        _contribute_search_contribute_search_component__WEBPACK_IMPORTED_MODULE_22__["ContributeSearchComponent"],
        _contribute_search_contribute_search_lista_item_component__WEBPACK_IMPORTED_MODULE_23__["ContributeSearchListaItemComponent"],
        _contribute_download_contribute_download_component__WEBPACK_IMPORTED_MODULE_24__["ContributeDownloadComponent"],
        _contribute_projects_contribute_projects_component__WEBPACK_IMPORTED_MODULE_31__["ContributeProjectsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_25__["MaintenanceComponent"],
        _maintenance_maintenance_download_settings_maintenance_download_settings_component__WEBPACK_IMPORTED_MODULE_26__["MaintenanceDownloadSettingsComponent"],
        _maintenance_maintenance_languages_maintenance_languages_component__WEBPACK_IMPORTED_MODULE_28__["MaintenanceLanguagesComponent"],
        _maintenance_maintenance_projects_maintenance_projects_component__WEBPACK_IMPORTED_MODULE_29__["MaintenanceProjectsComponent"],
        _maintenance_maintenance_users_maintenance_users_component__WEBPACK_IMPORTED_MODULE_30__["MaintenanceUsersComponent"],
        _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignInSignUpComponent"],
        _signin_signup_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_15__["SignInFormComponent"],
        _signin_signup_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_16__["SignUpFormComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_32__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_9__["ContributeComponent"],
                    _contribute_translate_contribute_translate_component__WEBPACK_IMPORTED_MODULE_19__["ContributeTranslateComponent"],
                    _contribute_translate_contribute_translate_lista_item_component__WEBPACK_IMPORTED_MODULE_21__["ContributeTranslateListaItemComponent"],
                    _contribute_search_contribute_search_component__WEBPACK_IMPORTED_MODULE_22__["ContributeSearchComponent"],
                    _contribute_search_contribute_search_lista_item_component__WEBPACK_IMPORTED_MODULE_23__["ContributeSearchListaItemComponent"],
                    _contribute_download_contribute_download_component__WEBPACK_IMPORTED_MODULE_24__["ContributeDownloadComponent"],
                    _contribute_projects_contribute_projects_component__WEBPACK_IMPORTED_MODULE_31__["ContributeProjectsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_25__["MaintenanceComponent"],
                    _maintenance_maintenance_download_settings_maintenance_download_settings_component__WEBPACK_IMPORTED_MODULE_26__["MaintenanceDownloadSettingsComponent"],
                    _maintenance_maintenance_languages_maintenance_languages_component__WEBPACK_IMPORTED_MODULE_28__["MaintenanceLanguagesComponent"],
                    _maintenance_maintenance_projects_maintenance_projects_component__WEBPACK_IMPORTED_MODULE_29__["MaintenanceProjectsComponent"],
                    _maintenance_maintenance_users_maintenance_users_component__WEBPACK_IMPORTED_MODULE_30__["MaintenanceUsersComponent"],
                    _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignInSignUpComponent"],
                    _signin_signup_signin_form_signin_form_component__WEBPACK_IMPORTED_MODULE_15__["SignInFormComponent"],
                    _signin_signup_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_16__["SignUpFormComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                            useFactory: httpTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                        },
                        defaultLanguage: 'en'
                    }),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_32__["NgxSpinnerModule"]
                ],
                providers: [
                    _core_services_notification_service__WEBPACK_IMPORTED_MODULE_33__["NotificationService"],
                    _signin_signup_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_18__["SignUpService"],
                    _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_20__["ContributeService"],
                    _maintenance_services_maintenance_service__WEBPACK_IMPORTED_MODULE_27__["MaintenanceService"],
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ]
            }]
    }], null, null); })();
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "bUwk":
/*!***********************************************!*\
  !*** ./src/app/core/services/http.service.ts ***!
  \***********************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interceptors/error-handler.interceptor */ "fbaV");
/* harmony import */ var _interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interceptors/cache.interceptor */ "olX5");
/* harmony import */ var _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interceptors/api-prefix.interceptor */ "wndk");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interceptors/token.interceptor */ "59tN");








// From @angular/common/http/src/interceptor: allows to chain interceptors
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(request) {
        return this.interceptor.intercept(request, this.next);
    }
}
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
const HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
class HttpService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] {
    constructor(httpHandler, injector, interceptors = []) {
        super(httpHandler);
        this.httpHandler = httpHandler;
        this.injector = injector;
        this.interceptors = interceptors;
        if (!this.interceptors) {
            // Configure default interceptors that can be disabled here
            this.interceptors = [
                this.injector.get(_interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]),
                this.injector.get(_interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"]),
                this.injector.get(_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"])
            ];
        }
    }
    cache(forceUpdate) {
        const cacheInterceptor = this.injector
            .get(_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheInterceptor"])
            .configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    }
    skipErrorHandler() {
        return this.removeInterceptor(_interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"]);
    }
    disableApiPrefix() {
        return this.removeInterceptor(_interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]);
    }
    disableToken() {
        return this.removeInterceptor(_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"]);
    }
    // Override the original method to wire interceptors when triggering the request.
    request(method, url, options) {
        if (url.includes('/assets/i18n/')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](this.httpHandler).request(method, url, options);
        }
        const handler = this.interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler).request(method, url, options);
    }
    removeInterceptor(interceptorType) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.filter(i => !(i instanceof interceptorType)));
    }
    addInterceptor(interceptor) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HTTP_DYNAMIC_INTERCEPTORS, 8)); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [HTTP_DYNAMIC_INTERCEPTORS]
            }] }]; }, null); })();


/***/ }),

/***/ "by1c":
/*!*****************************************************!*\
  !*** ./src/app/core/services/http-cache.service.ts ***!
  \*****************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "OsF4");



const log = new _logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]('HttpCacheService');
const cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
class HttpCacheService {
    constructor() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    setCacheData(url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data
        };
        log.debug(`Cache set for key: "${url}"`);
        this.saveCacheData();
    }
    /**
     * Gets the cached data for the specified request.
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    getCacheData(url) {
        const cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug(`Cache hit for key: "${url}"`);
            return cacheEntry.data;
        }
        return null;
    }
    /**
     * Gets the cached entry for the specified request.
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    getHttpCacheEntry(url) {
        return this.cachedData[url] || null;
    }
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param url The request URL.
     */
    clearCache(url) {
        delete this.cachedData[url];
        log.debug(`Cache cleared for key: "${url}"`);
        this.saveCacheData();
    }
    /**
     * Cleans cache entries older than the specified date.
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    cleanCache(expirationDate) {
        if (expirationDate) {
            Object.entries(this.cachedData).forEach(([key, value]) => {
                if (expirationDate >= value.lastUpdated) {
                    delete this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    }
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    setPersistence(persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    }
    saveCacheData() {
        if (this.storage) {
            this.storage.setItem(cachePersistenceKey, JSON.stringify(this.cachedData));
        }
    }
    loadCacheData() {
        const data = this.storage ? this.storage.getItem(cachePersistenceKey) : null;
        this.cachedData = data ? JSON.parse(data) : {};
    }
}
HttpCacheService.ɵfac = function HttpCacheService_Factory(t) { return new (t || HttpCacheService)(); };
HttpCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpCacheService, factory: HttpCacheService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cplz":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _signin_signup_signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../signin-signup/signin-form/viewmodels/userViewModel */ "e72g");
/* harmony import */ var _credentials_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credentials.service */ "DR2l");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class DataService {
    constructor(credencialsService, httpService) {
        this.credencialsService = credencialsService;
        this.httpService = httpService;
    }
    loadCurrentUser() {
        if (this.credencialsService.isAuthenticated()) {
            const body = JSON.stringify(this.credencialsService.getCredentials.email);
            return this.httpService.post('User/email/', body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
                this.credencialsService.currentUser = response ? new _signin_signup_signin_form_viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_3__["UserViewModel"](response) : null;
                return this.credencialsService.currentUser;
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_credentials_service__WEBPACK_IMPORTED_MODULE_4__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _credentials_service__WEBPACK_IMPORTED_MODULE_4__["CredentialsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dyfh":
/*!********************************************************************************!*\
  !*** ./src/app/signin-signup/signup-form/viewmodels/passwordResetViewModel.ts ***!
  \********************************************************************************/
/*! exports provided: ResetPasswordViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordViewModel", function() { return ResetPasswordViewModel; });
class ResetPasswordViewModel {
}


/***/ }),

/***/ "e1xN":
/*!*****************************************************************************!*\
  !*** ./src/app/contribute/search/contribute-search-lista-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContributeSearchListaItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeSearchListaItemComponent", function() { return ContributeSearchListaItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contribute.service */ "ievF");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/notification.service */ "Y4+Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "aEDk");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");











function ContributeSearchListaItemComponent_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translation_r4 == null ? null : translation_r4.sentenceL2 == null ? null : translation_r4.sentenceL2.languageDescr);
} }
const _c0 = function (a0) { return { "border-bottom": a0 }; };
const _c1 = function (a0) { return [a0, true]; };
const _c2 = function (a0, a1) { return { "text-success": a0, "disabled": a1 }; };
const _c3 = function () { return ["like"]; };
const _c4 = function (a0) { return [a0, false]; };
const _c5 = function (a0, a1) { return { "text-danger": a0, "disabled": a1 }; };
function ContributeSearchListaItemComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContributeSearchListaItemComponent_div_4_div_1_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeSearchListaItemComponent_div_4_div_1_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const translation_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.likeTranslation(translation_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeSearchListaItemComponent_div_4_div_1_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const translation_r4 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.dislikeTranslation(translation_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translation_r4 = ctx.$implicit;
    const isFirst_r5 = ctx.first;
    const isLast_r6 = ctx.last;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_4_0 = null;
    let tmp_6_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isFirst_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c0, !isLast_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translation_r4 == null ? null : translation_r4.sentenceL2 == null ? null : translation_r4.sentenceL2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](29, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c1, translation_r4 == null ? null : translation_r4.translationLikes), ctx_r3.hasLikeCurrentuser, ctx_r3), !ctx_r3.credencialsService.getCredentials));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 11, translation_r4 == null ? null : translation_r4.translationLikes, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c3), true, true)) == null ? null : tmp_4_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](35, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c4, translation_r4 == null ? null : translation_r4.translationLikes), ctx_r3.hasLikeCurrentuser, ctx_r3), !ctx_r3.credencialsService.getCredentials));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](14, 20, translation_r4 == null ? null : translation_r4.translationLikes, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c3), false, true)) == null ? null : tmp_6_0.length);
} }
function ContributeSearchListaItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContributeSearchListaItemComponent_div_4_div_1_Template, 15, 39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translationPerLanguage_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !last_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", translationPerLanguage_r1[1]);
} }
const _c6 = function (a0, a1, a2) { return [a0, a1, a2]; };
let ContributeSearchListaItemComponent = class ContributeSearchListaItemComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(contributeService, credencialsService, notificationService) {
        super();
        this.contributeService = contributeService;
        this.credencialsService = credencialsService;
        this.notificationService = notificationService;
        this.searchSentenceL2 = '';
    }
    ngOnInit() {
    }
    hasLikeCurrentuser([translatioLikes, value]) {
        if (!this.credencialsService.getCredentials) {
            return false;
        }
        return translatioLikes.some(x => x.like === value && x.userId === this.credencialsService.getCredentials.id);
    }
    likeTranslation(translation) {
        if (this.credencialsService.getCredentials) {
            const currentLikeUser = translation.translationLikes.find(x => x.userId === this.credencialsService.getCredentials.id);
            if (!currentLikeUser) {
                const newTranslationLike = {
                    userId: this.credencialsService.getCredentials.id,
                    translationId: translation.id,
                    like: true
                };
                this.contributeService.insertTranslationLike(newTranslationLike)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    translation.translationLikes.push(response);
                    translation.translationLikes = translation.translationLikes.slice();
                    this.notificationService.sendTranslationLikeAdd(response);
                });
            }
            else {
                currentLikeUser.like = currentLikeUser.like ? null : true;
                this.contributeService.updateTranslationLike(currentLikeUser)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    translation.translationLikes = translation.translationLikes.slice();
                    this.notificationService.sendTranslationLikeUpdate(response);
                });
            }
        }
    }
    dislikeTranslation(translation) {
        if (this.credencialsService.getCredentials) {
            const currentLikeUser = translation.translationLikes.find(x => x.userId === this.credencialsService.getCredentials.id);
            if (!currentLikeUser) {
                const newTranslationLike = {
                    userId: this.credencialsService.getCredentials.id,
                    translationId: translation.id,
                    like: false
                };
                this.contributeService.insertTranslationLike(newTranslationLike)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    translation.translationLikes.push(response);
                    translation.translationLikes = translation.translationLikes.slice();
                    this.notificationService.sendTranslationLikeAdd(response);
                });
            }
            else {
                currentLikeUser.like = currentLikeUser.like === false ? null : false;
                this.contributeService.updateTranslationLike(currentLikeUser)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    translation.translationLikes = translation.translationLikes.slice();
                    this.notificationService.sendTranslationLikeUpdate(response);
                });
            }
        }
    }
    filterTranslations([translations, languagesL2, searchSentenceL2]) {
        if (!translations) {
            return [];
        }
        if (languagesL2.length === 0 && searchSentenceL2.trim().length === 0) {
            return translations;
        }
        return translations
            .filter(x => (languagesL2.length === 0 || this.contributeService.languagesL2Control.value.includes(x.sentenceL2.languageId)) &&
            (searchSentenceL2.trim().length === 0 || x.sentenceL2.text.includes(searchSentenceL2.trim())));
    }
};
ContributeSearchListaItemComponent.ɵfac = function ContributeSearchListaItemComponent_Factory(t) { return new (t || ContributeSearchListaItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_4__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
ContributeSearchListaItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeSearchListaItemComponent, selectors: [["app-contribute-search-lista-item"]], inputs: { item: "item", searchSentenceL2: "searchSentenceL2" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 15, consts: [[1, "container-fluid", "d-flex", "lista-item", "border-bottom", "pr-0"], [1, "column-l1", "border-right"], [1, "column-l2"], ["class", "col-12", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", 3, "ngClass"], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "w-100"], ["class", "pl-1 w-100", 4, "ngIf"], [1, "pl-3", "w-100", "border-right", "border-left", "d-flex", "align-items-center", 3, "ngClass"], ["aria-hidden", "true", 1, "btn", "ml-auto", "mr-2", "fa", "fa-thumbs-up", 3, "ngClass", "click"], [1, "pl-1", "pr-2"], ["aria-hidden", "true", 1, "btn", "mr-2", "fa", "fa-thumbs-down", 3, "ngClass", "click"], [1, "pl-1", "w-100"]], template: function ContributeSearchListaItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContributeSearchListaItemComponent_div_4_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "pairs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "groupBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "functionCall");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item == null ? null : ctx.item.sentence == null ? null : ctx.item.sentence.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](11, _c6, ctx.item == null ? null : ctx.item.translations, ctx.contributeService == null ? null : ctx.contributeService.languagesL2Control == null ? null : ctx.contributeService.languagesL2Control.value, ctx.searchSentenceL2), ctx.filterTranslations, ctx), "sentenceL2.languageId")));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["PairsPipe"], ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["GroupByPipe"], _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_9__["FunctionCallPipe"], ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["FilterByPipe"]], styles: [".column-l1[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.column-l2[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250cmlidXRlLXNlYXJjaC1saXN0YS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUFGIiwiZmlsZSI6ImNvbnRyaWJ1dGUtc2VhcmNoLWxpc3RhLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uLWwxIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNvbHVtbi1sMiB7XG4gIHdpZHRoOiA2MCU7XG59XG5cblxuLmxpc3RhLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmxpc3RhLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTZmZmY3O1xufVxuXG4ubGlzdGEtaXRlbS1zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzE5OGRjODtcbiAgYmFja2dyb3VuZDogI2U2ZmZmNztcbn1cbiJdfQ== */"] });
ContributeSearchListaItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], ContributeSearchListaItemComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeSearchListaItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute-search-lista-item',
                templateUrl: './contribute-search-lista-item.component.html',
                styleUrls: ['./contribute-search-lista-item.component.scss']
            }]
    }], function () { return [{ type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_4__["ContributeService"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_5__["CredentialsService"] }, { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchSentenceL2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "e72g":
/*!***********************************************************************!*\
  !*** ./src/app/signin-signup/signin-form/viewmodels/userViewModel.ts ***!
  \***********************************************************************/
/*! exports provided: UserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
class UserViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.id = registo.id;
            this.email = registo.email;
            this.name = registo.name;
            this.userProjects = registo.userProjects.map(x => {
                return {
                    userId: x.userId,
                    projectId: x.projectId,
                    isAutorized: x.isAutorized,
                    isProjectOwner: x.isProjectOwner,
                    project: null
                };
            });
            this.proficiencyLanguages = registo.proficiencyLanguages.map(x => {
                return {
                    userId: x.userId,
                    languageId: x.languageId,
                    levelProficiency: x.levelProficiency
                };
            });
        }
    }
}


/***/ }),

/***/ "f44z":
/*!********************************************!*\
  !*** ./src/app/shared/helpers/roleEnum.ts ***!
  \********************************************/
/*! exports provided: RoleEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleEnum", function() { return RoleEnum; });
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["Root"] = 1] = "Root";
    RoleEnum[RoleEnum["Admin"] = 2] = "Admin";
    RoleEnum[RoleEnum["Editor"] = 3] = "Editor";
    RoleEnum[RoleEnum["Regular"] = 4] = "Regular";
})(RoleEnum || (RoleEnum = {}));


/***/ }),

/***/ "fbaV":
/*!****************************************************************!*\
  !*** ./src/app/core/interceptors/error-handler.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/logger.service */ "OsF4");
/* harmony import */ var src_environments_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/.env */ "4pUk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const log = new _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
class ErrorHandlerInterceptor {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.errorHandler(error)));
    }
    // Customize the default error handler here if needed
    errorHandler(response) {
        if (!src_environments_env__WEBPACK_IMPORTED_MODULE_4__["env"].production) {
            // Do something with the error
            log.error('Request error', response);
        }
        // redirect to login if token is expired
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            if (response.status === 401) {
                this.router.navigate([this.route.snapshot.queryParams.redirect || '/login'], { replaceUrl: true });
            }
        }
        throw response;
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "ievF":
/*!***********************************************************!*\
  !*** ./src/app/contribute/services/contribute.service.ts ***!
  \***********************************************************/
/*! exports provided: ContributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeService", function() { return ContributeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewmodels/sentenceViewModel */ "NktI");
/* harmony import */ var _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../viewmodels/userProjectViewModel */ "kCHo");
/* harmony import */ var _core_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/http.service */ "bUwk");








class ContributeService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = 'Contribute/';
        this.languagesList = [];
        this.projectsList = [];
        this.loadDadosCompleted = false;
        this.sentenceSelect = null;
        this.projectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: true });
        this.fileImportControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.languagesL2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
    }
    loadDados() {
        if (this.loadDadosCompleted) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                projects: this.projectsList,
                languages: this.languagesList,
            });
        }
        return this.httpService.get(this.url + 'loadDados')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            if (response) {
                this.projectsList = response.projects || [];
                this.languagesList = response.languages || [];
            }
            this.loadDadosCompleted = true;
            return response;
        }));
    }
    getSentencesByLanguagueId(languagueId) {
        return this.httpService.get(this.url + 'sentences/' + languagueId);
    }
    insertTranslation(translation) {
        const body = JSON.stringify(translation);
        return this.httpService.post(this.url + 'translation', body);
    }
    updateTranslation(translation) {
        const body = JSON.stringify(translation);
        return this.httpService.put(this.url + 'translation', body);
    }
    deleteTranslation(translationId, sentenceId) {
        return this.httpService.delete(this.url + 'translation/' + translationId + '/' + sentenceId);
    }
    insertProficiencyLanguage(profeciencyLanguage) {
        const body = JSON.stringify(profeciencyLanguage);
        return this.httpService.post(this.url + 'proficiencyLanguage', body);
    }
    insertTranslationLike(translationLike) {
        const body = JSON.stringify(translationLike);
        return this.httpService.post(this.url + 'translationlike', body);
    }
    insertSentences(sentences) {
        const body = JSON.stringify(sentences);
        return this.httpService.post(this.url + 'sentences', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.map(x => new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_4__["SentenceViewModel"](x));
        }));
    }
    insertUserProject(userProject) {
        const body = JSON.stringify(userProject);
        return this.httpService.post(this.url + 'projectuser', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return new _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_5__["UserProjectViewModel"](response);
        }));
    }
    updateTranslationLike(translationLike) {
        const body = JSON.stringify(translationLike);
        return this.httpService.put(this.url + 'translationlike', body);
    }
    getSentecesWithLastTranslation(l1, l2, projectId) {
        return this.httpService.get(this.url + 'translations/' + l1 + '/' + l2 + '/' + (projectId ? projectId : 0));
    }
    getTranslationsFromLanguageAndProject(l1, projectId) {
        return this.httpService.get(this.url + 'translations/' + l1 + '/' + (projectId ? projectId : 0));
    }
    getTranslationsFromLanguage1ToLanguage2AndProject(l1, l2, projectId) {
        return this.httpService
            .get(this.url + 'translationstoexport/' + l1 + '/' + l2 + '/' + (projectId ? projectId : 0));
    }
    getUserProjects(userId) {
        return this.httpService.get(this.url + 'userprojects/' + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.map(x => new _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_5__["UserProjectViewModel"](x));
        }));
    }
}
ContributeService.ɵfac = function ContributeService_Factory(t) { return new (t || ContributeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
ContributeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContributeService, factory: ContributeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContributeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "jqbX":
/*!**********************************************************************!*\
  !*** ./src/app/contribute/projects/contribute-projects.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContributeProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeProjectsComponent", function() { return ContributeProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _maintenance_viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../maintenance/viewmodels/projectUserViewModel */ "q0+R");
/* harmony import */ var _maintenance_viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../maintenance/viewmodels/projectViewModel */ "uXFV");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewmodels/userProjectViewModel */ "kCHo");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/contribute.service */ "ievF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _maintenance_services_maintenance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../maintenance/services/maintenance.service */ "T59Z");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-virtual-scroller */ "SYYg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");





















const _c0 = function (a0) { return [a0, true]; };
const _c1 = function (a0) { return [a0, false]; };
const _c2 = function (a0) { return [a0, null]; };
function ContributeProjectsComponent_div_30_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.projectUsers), ctx_r4.countUsersInState, ctx_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.projectUsers), ctx_r4.countUsersInState, ctx_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.projectUsers), ctx_r4.countUsersInState, ctx_r4));
} }
function ContributeProjectsComponent_div_30_ng_container_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Label.Accept"));
} }
function ContributeProjectsComponent_div_30_ng_container_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Label.Rejected"));
} }
function ContributeProjectsComponent_div_30_ng_container_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Label.Pending"));
} }
function ContributeProjectsComponent_div_30_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContributeProjectsComponent_div_30_ng_container_11_span_1_Template, 3, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContributeProjectsComponent_div_30_ng_container_11_span_2_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContributeProjectsComponent_div_30_ng_container_11_span_3_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r3 == null ? null : item_r3.isAutorized) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r3 == null ? null : item_r3.isAutorized) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r3 == null ? null : item_r3.isAutorized) === null);
} }
function ContributeProjectsComponent_div_30_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Label.ProjectOwner"));
} }
const _c3 = function (a0) { return { "lista-item-selected": a0 }; };
const _c4 = function (a0, a1, a2) { return { "badge-secondary": a0, "badge-success": a1, "badge-danger": a2 }; };
function ContributeProjectsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeProjectsComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r3 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onSelectItem(item_r3.isprojectOwner ? item_r3.project : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContributeProjectsComponent_div_30_ng_container_3_Template, 10, 21, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContributeProjectsComponent_div_30_ng_container_11_Template, 4, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContributeProjectsComponent_div_30_span_12_Template, 3, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c3, ctx_r1.currentProject === item_r3.project));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.isprojectOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.language1Name) + " --> " + (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.language2Name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](11, _c4, !(item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1), (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1) && (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1) === (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1WithTranslation), (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1) && (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1) !== (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1WithTranslation)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1WithTranslation) + "/" + (item_r3 == null ? null : item_r3.project == null ? null : item_r3.project.countSentencesL1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r3.isprojectOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3 == null ? null : item_r3.isprojectOwner);
} }
function ContributeProjectsComponent_div_34_ng_container_1_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 48);
} }
function ContributeProjectsComponent_div_34_ng_container_1_dx_select_box_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dx-select-box", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, "Shared.Label.Select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 3, ctx_r17.contributeService == null ? null : ctx_r17.contributeService.projectsList, ctx_r17.filterProjects, ctx_r17))("showClearButton", true);
} }
function ContributeProjectsComponent_div_34_ng_container_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function ContributeProjectsComponent_div_34_ng_container_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function ContributeProjectsComponent_div_34_ng_container_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dx-check-box", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Shared.Label.Active"), " ");
} }
function ContributeProjectsComponent_div_34_ng_container_1_div_35_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r23 == null ? null : (tmp_0_0 = item_r23.get("userName")) == null ? null : tmp_0_0.value);
} }
const _c5 = function (a0, a1) { return [a0, a1]; };
function ContributeProjectsComponent_div_34_ng_container_1_div_35_div_7_dx_select_box_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dx-select-box", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "Shared.Label.Select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c5, ctx_r26.listUsers, i_r24), ctx_r26.filterUsers, ctx_r26));
} }
function ContributeProjectsComponent_div_34_ng_container_1_div_35_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContributeProjectsComponent_div_34_ng_container_1_div_35_div_7_span_3_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContributeProjectsComponent_div_34_ng_container_1_div_35_div_7_dx_select_box_4_Template, 3, 11, "dx-select-box", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dx-check-box", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dx-radio-group", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r23 == null ? null : (tmp_1_0 = item_r23.get("userName")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r23 == null ? null : (tmp_2_0 = item_r23.get("userName")) == null ? null : tmp_2_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "Shared.Label.ProjectOwner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r22.radioButtonItems);
} }
function ContributeProjectsComponent_div_34_ng_container_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContributeProjectsComponent_div_34_ng_container_1_div_35_div_7_Template, 11, 7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "Shared.Label.Users"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.formArrayProjectUsersControls());
} }
function ContributeProjectsComponent_div_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContributeProjectsComponent_div_34_ng_container_1_input_8_Template, 1, 0, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContributeProjectsComponent_div_34_ng_container_1_dx_select_box_9_Template, 3, 9, "dx-select-box", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "dx-select-box", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ContributeProjectsComponent_div_34_ng_container_1_div_24_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "dx-select-box", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ContributeProjectsComponent_div_34_ng_container_1_div_33_Template, 3, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ContributeProjectsComponent_div_34_ng_container_1_div_34_Template, 6, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ContributeProjectsComponent_div_34_ng_container_1_div_35_Template, 8, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeProjectsComponent_div_34_ng_container_1_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeProjectsComponent_div_34_ng_container_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r15.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 19, "Shared.Label.Name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.currentProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.currentUserProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 21, "Shared.Label.Description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 23, "Shared.Label.Language1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 29, "Shared.Label.Select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](22, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](43, _c5, ctx_r15.contributeService == null ? null : ctx_r15.contributeService.languagesList, ctx_r15.form == null ? null : ctx_r15.form.controls == null ? null : ctx_r15.form.controls.language2Id == null ? null : ctx_r15.form.controls.language2Id.value), ctx_r15.removeLanguage, ctx_r15))("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.isFormSubmitted && ctx_r15.form.get("language1Id").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 31, "Shared.Label.Language2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 37, "Shared.Label.Select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](31, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](46, _c5, ctx_r15.contributeService == null ? null : ctx_r15.contributeService.languagesList, ctx_r15.form == null ? null : ctx_r15.form.controls == null ? null : ctx_r15.form.controls.language1Id == null ? null : ctx_r15.form.controls.language1Id.value), ctx_r15.removeLanguage, ctx_r15))("showClearButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.isFormSubmitted && ctx_r15.form.get("language2Id").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.currentProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.currentProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 39, "Shared.Label.Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 41, "Shared.Label.Save"), " ");
} }
function ContributeProjectsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContributeProjectsComponent_div_34_ng_container_1_Template, 45, 49, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isBusy && ctx_r2.form);
} }
let ContributeProjectsComponent = class ContributeProjectsComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"] {
    constructor(credencialsService, contributeService, toastr, formBuilder, maintenanceService, spinner, translateService) {
        super();
        this.credencialsService = credencialsService;
        this.contributeService = contributeService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.maintenanceService = maintenanceService;
        this.spinner = spinner;
        this.translateService = translateService;
        this.listUserProjects = [];
        this.listLanguages = [];
        this.listUsers = [];
        this.currentProject = null;
        this.currentUserProject = null;
        this.modeAdd = false;
        this.popupVisible = false;
        this.isFormSubmitted = false;
        this.radioButtonItems = [
            {
                text: this.translateService.instant('Shared.Label.Autorized'),
                value: true
            },
            {
                text: this.translateService.instant('Shared.Label.NoAutorized'),
                value: false
            },
            {
                text: this.translateService.instant('Shared.Label.Pending'),
                value: null
            }
        ];
    }
    formArrayProjectUsersControls() {
        return this.form.get('projectUsers').controls;
    }
    ngOnInit() {
        this.loadregistos();
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    countUsersInState([projectUsers, state]) {
        if (!projectUsers) {
            return 0;
        }
        return projectUsers.filter(x => x.isAutorized === state).length;
    }
    filterUsers([users, index]) {
        if (!users) {
            return [];
        }
        const usersSelected = this.form.get('projectUsers').controls.map(x => x.get('userId').value);
        usersSelected.splice(index, 1);
        return users.filter(x => !usersSelected.includes(x.id));
    }
    removeLanguage([languagesList, languageId]) {
        if (languagesList) {
            return languagesList.filter(x => x.id !== languageId);
        }
        return [];
    }
    onSelectItem(project) {
        if (project) {
            this.isFormSubmitted = false;
            this.currentProject = project;
            this.initializeForm();
            this.popupVisible = true;
        }
    }
    onCancel() {
        this.popupVisible = false;
        this.form = null;
        this.currentProject = null;
        this.currentUserProject = null;
    }
    onSave() {
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            if (this.currentProject) {
                const registo = new _maintenance_viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_5__["ProjectViewModel"]();
                registo.id = this.form.get('id').value;
                registo.name = this.form.get('name').value;
                registo.description = this.form.get('description').value;
                registo.language1Id = this.form.get('language1Id').value;
                registo.language2Id = this.form.get('language2Id').value;
                registo.active = this.form.get('active').value;
                registo.userCreationId = this.form.get('userCreationId').value;
                registo.dateCreation = this.form.get('dateCreation').value;
                registo.userChangeId = this.form.get('userChangeId').value;
                registo.dateChange = this.form.get('dateChange').value;
                registo.projectUsers = this.formArrayProjectUsersControls().map(x => {
                    const projectUser = new _maintenance_viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_4__["ProjectUserViewModel"]();
                    projectUser.userId = x.get('userId').value;
                    projectUser.projectId = x.get('projectId').value;
                    projectUser.isAutorized = x.get('isAutorized').value;
                    projectUser.isprojectOwner = x.get('isprojectOwner').value;
                    return projectUser;
                });
                if (this.currentProject && this.currentProject.id) { // UPDATE
                    this.incrementIsBusy();
                    this.maintenanceService.updateProject(registo)
                        .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                        .subscribe((response) => {
                        this.currentProject.copyFrom(response);
                        this.popupVisible = false;
                        this.form = null;
                        this.currentProject = null;
                        this.decrementIsBusy();
                    }, () => {
                        this.decrementIsBusy();
                        this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorUpdatingProject'));
                    });
                }
                else { // INSERT
                    this.incrementIsBusy();
                    this.maintenanceService.insertProject(registo)
                        .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                        .subscribe((response) => {
                        this.currentProject = new _maintenance_viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_5__["ProjectViewModel"](response);
                        const newRegisto = new _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_7__["UserProjectViewModel"]();
                        newRegisto.isAutorized = true;
                        newRegisto.isprojectOwner = true;
                        newRegisto.projectId = this.currentProject.id;
                        newRegisto.project = this.currentProject;
                        this.listUserProjects.push(newRegisto);
                        this.popupVisible = false;
                        this.form = null;
                        this.currentProject = null;
                        this.currentUserProject = null;
                        this.decrementIsBusy();
                    }, () => {
                        this.decrementIsBusy();
                        this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingNewProject'));
                    });
                }
            }
            else if (this.currentUserProject) {
                this.currentUserProject.projectId = this.form.get('id').value;
                this.contributeService.insertUserProject(this.currentUserProject)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    const newRegisto = new _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_7__["UserProjectViewModel"](response);
                    this.listUserProjects.push(newRegisto);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentProject = null;
                    this.currentUserProject = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingNewProject'));
                });
            }
        }
    }
    createProject() {
        const newProject = new _maintenance_viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_5__["ProjectViewModel"]();
        const newProjectUser = new _maintenance_viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_4__["ProjectUserViewModel"]();
        newProjectUser.userId = this.credencialsService.getCredentials.id;
        newProjectUser.userName = this.credencialsService.getCredentials.email;
        newProjectUser.isAutorized = true;
        newProjectUser.isprojectOwner = true;
        newProject.projectUsers = [newProjectUser];
        newProject.active = true;
        this.onSelectItem(newProject);
    }
    addProject() {
        const newUserProject = new _viewmodels_userProjectViewModel__WEBPACK_IMPORTED_MODULE_7__["UserProjectViewModel"]();
        newUserProject.isprojectOwner = false;
        newUserProject.userId = this.credencialsService.getCredentials.id;
        newUserProject.isAutorized = null;
        newUserProject.projectId = null;
        this.currentUserProject = newUserProject;
        this.form = this.formBuilder.group({
            id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: [{ value: null, disabled: true }],
            description: [{ value: null, disabled: true }],
            language1Id: [{ value: null, disabled: true }],
            language2Id: [{ value: null, disabled: true }],
        });
        this.form.get('id').valueChanges
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            const project = this.contributeService.projectsList ? this.contributeService.projectsList.find(x => x.id === value) : null;
            if (project) {
                this.form.get('name').setValue(project.name, { emitEvent: false });
                this.form.get('description').setValue(project.descr, { emitEvent: false });
                this.form.get('language1Id').setValue(project.language1Id, { emitEvent: false });
                this.form.get('language2Id').setValue(project.language2Id, { emitEvent: false });
            }
            else {
                this.form.get('name').setValue('', { emitEvent: false });
                this.form.get('description').setValue('', { emitEvent: false });
                this.form.get('language1Id').setValue(null, { emitEvent: false });
                this.form.get('language2Id').setValue(null, { emitEvent: false });
            }
        });
        this.isFormSubmitted = false;
        this.popupVisible = true;
    }
    filterProjects(listProjects) {
        if (!listProjects) {
            return [];
        }
        const currentUserProjects = this.listUserProjects.map(x => x.projectId);
        return listProjects.filter(x => !currentUserProjects.includes(x.id));
    }
    loadregistos() {
        this.spinner.show();
        this.incrementIsBusy();
        this.contributeService
            .getUserProjects(this.credencialsService.getCredentials.id)
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.listUserProjects = response;
            this.spinner.hide();
            this.decrementIsBusy();
        }, () => {
            this.toastr.error(this.translateService.instant('Shared.Message.ErrorLoading'));
            this.spinner.hide();
            this.decrementIsBusy();
        });
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            id: [this.currentProject.id],
            name: [this.currentProject.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [this.currentProject.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            language1Id: [this.currentProject.language1Id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            language2Id: [this.currentProject.language2Id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            active: [this.currentProject.active],
            userCreationId: [this.currentProject.userCreationId],
            dateCreation: [this.currentProject.dateCreation],
            userChangeId: [this.currentProject.userChangeId],
            dateChange: [this.currentProject.dateChange],
            projectUsers: this.formBuilder.array([]),
        });
        if (this.currentProject.projectUsers) {
            this.currentProject.projectUsers.forEach(u => {
                const formGroup = this.formBuilder.group({
                    userId: [u.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    userName: [u.userName],
                    projectId: [u.projectId],
                    isprojectOwner: [{ value: u.isprojectOwner, disabled: !this.currentProject.id }],
                    isAutorized: [{ value: u.isAutorized, disabled: u.isprojectOwner }, []],
                });
                formGroup.get('isprojectOwner').valueChanges
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((value) => {
                    if (value) {
                        formGroup.get('isAutorized').setValue(true, { emitEvent: false });
                        formGroup.get('isAutorized').disable({ emitEvent: false });
                    }
                    else {
                        formGroup.get('isAutorized').enable({ emitEvent: false });
                    }
                });
                this.form.get('projectUsers').push(formGroup);
            });
        }
    }
};
ContributeProjectsComponent.ɵfac = function ContributeProjectsComponent_Factory(t) { return new (t || ContributeProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_8__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_9__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_maintenance_services_maintenance_service__WEBPACK_IMPORTED_MODULE_11__["MaintenanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"])); };
ContributeProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeProjectsComponent, selectors: [["app-contribute-projects"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 34, consts: [[1, "pl-2", "position-absolute", "btn-add"], ["type", "button", 1, "btn", "btn-primary", "mr-2", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "pb-2", "pl-2", "pr-s"], [1, "w-100"], [1, "p-scroll", "invisible-background"], [1, "row", "m-0", "border-bottom", "bg-white", "lista-row-header"], [1, "col-3", "d-flex", "align-items-center"], [1, "col-3", "d-flex", "align-items-center", "border-left"], [1, "position-relative"], [1, "height-list", "w-100", 3, "items"], ["scroll", ""], ["class", "row m-0 lista-item white-background border-bottom", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "row", "m-0", "lista-item", "white-background", "border-bottom", 3, "ngClass", "click"], [4, "ngIf"], [1, "badge", "ml-auto", 3, "ngClass"], ["class", "badge badge-info", 4, "ngIf"], [1, "badge", "badge-success", "ml-1"], [1, "badge", "badge-danger", "ml-1"], [1, "badge", "badge-warning", "ml-1"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "badge", "badge-info"], [1, "container-form", 3, "formGroup"], ["direction", "vertical"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center", "pt-2"], [1, "col-4"], [1, "col-8"], ["class", "form-control", "type", "text", "formControlName", "name", 4, "ngIf"], ["class", "form-control", "valueExpr", "id", "displayExpr", "name", "formControlName", "id", 3, "dataSource", "showClearButton", "placeholder", 4, "ngIf"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], ["type", "text", "formControlName", "description", 1, "form-control"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "language1Id", 1, "form-control", 3, "dataSource", "showClearButton", "placeholder"], ["class", "alert alert-danger mt-1 mb-0 p-1", 4, "ngIf"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "language2Id", 1, "form-control", 3, "dataSource", "showClearButton", "placeholder"], ["class", "row m-0 mb-2 d-flex align-items-center", 4, "ngIf"], ["class", "col-12 form-group", 4, "ngIf"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], [1, "col-6"], [1, "btn", "btn-danger", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "click"], ["type", "text", "formControlName", "name", 1, "form-control"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "id", 1, "form-control", 3, "dataSource", "showClearButton", "placeholder"], [1, "alert", "alert-danger", "mt-1", "mb-0", "p-1"], ["formControlName", "active", "text", "Yes", 1, "container-check", "w-100"], [1, "col-12", "form-group"], [1, "border"], [1, "col-12", "d-flex", "align-items-center", "p-2"], [1, "m-0"], ["formArrayName", "projectUsers"], ["class", "list-item border-top", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "list-item", "border-top", 3, "formGroupName"], [1, "d-flex", "align-items-center", "justify-content-center", "p-2"], [1, "col-5", "pl-0"], ["class", "form-control", "valueExpr", "id", "displayExpr", "name", "formControlName", "userId", 3, "dataSource", "placeholder", 4, "ngIf"], [1, "col-3"], ["formControlName", "isprojectOwner", 3, "text"], ["displayExpr", "text", "valueExpr", "value", "formControlName", "isAutorized", "layout", "horizontal", 3, "dataSource"], [1, "col-1", "pr-0"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "userId", 1, "form-control", 3, "dataSource", "placeholder"]], template: function ContributeProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeProjectsComponent_Template_button_click_1_listener() { return ctx.createProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeProjectsComponent_Template_button_click_4_listener() { return ctx.addProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "virtual-scroller", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ContributeProjectsComponent_div_30_Template, 13, 15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ngx-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "dx-popup", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ContributeProjectsComponent_Template_dx_popup_visibleChange_32_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ContributeProjectsComponent_div_34_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 20, "Shared.Label.Create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 22, "Shared.Label.Add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 24, "Shared.Label.Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 26, "Shared.Label.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 28, "ContributeComponent.Label.Language1Language2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 30, "ContributeComponent.Label.Info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.listUserProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.viewPortItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 32, "Shared.Label.ProjectDetail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", "60%")("height", "90%")("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_14__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_17__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxScrollViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxCheckBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_16__["DxRadioGroupComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_18__["FunctionCallPipe"]], styles: [".text-color[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n@media screen and (min-height: 451px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: calc(100vh - 221px);\n  }\n}\n\n@media screen and (max-height: 450px) {\n  .height-list[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n\n.height-list[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.pr-s[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n\n.invisible-background[_ngcontent-%COMP%] {\n  background-color: #333 !important;\n}\n\n.white-background[_ngcontent-%COMP%] {\n  background: white;\n}\n\nvirtual-scroller[_ngcontent-%COMP%] {\n  overflow-y: scroll !important;\n}\n\n.lista-row-header[_ngcontent-%COMP%] {\n  border-left: 2px solid white;\n  height: 49px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  top: 118px;\n}\n\n.container-form[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250cmlidXRlLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQURGIiwiZmlsZSI6ImNvbnRyaWJ1dGUtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDUxcHgpIHtcbiAgLmhlaWdodC1saXN0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjFweCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5oZWlnaHQtbGlzdCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxufVxuXG4uaGVpZ2h0LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnByLXMge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZmZmNztcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThkYzg7XG4gIGJhY2tncm91bmQ6ICNlNmZmZjc7XG59XG5cbi5pbnZpc2libGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbn1cblxuLndoaXRlLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxudmlydHVhbC1zY3JvbGxlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdGEtcm93LWhlYWRlciB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNDlweDtcbn1cblxuLmJ0bi1hZGQge1xuICB0b3A6IDExOHB4O1xufVxuXG4uY29udGFpbmVyLWZvcm0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM0cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iXX0= */"] });
ContributeProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], ContributeProjectsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute-projects',
                templateUrl: './contribute-projects.component.html',
                styleUrls: ['./contribute-projects.component.scss']
            }]
    }], function () { return [{ type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_8__["CredentialsService"] }, { type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_9__["ContributeService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _maintenance_services_maintenance_service__WEBPACK_IMPORTED_MODULE_11__["MaintenanceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "kCHo":
/*!***************************************************************!*\
  !*** ./src/app/contribute/viewmodels/userProjectViewModel.ts ***!
  \***************************************************************/
/*! exports provided: UserProjectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectViewModel", function() { return UserProjectViewModel; });
/* harmony import */ var _maintenance_viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maintenance/viewmodels/projectUserViewModel */ "q0+R");
/* harmony import */ var _maintenance_viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../maintenance/viewmodels/projectViewModel */ "uXFV");


class UserProjectViewModel extends _maintenance_viewmodels_projectUserViewModel__WEBPACK_IMPORTED_MODULE_0__["ProjectUserViewModel"] {
    constructor(registo) {
        super(registo);
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.userId = registo.userId;
            this.projectId = registo.projectId;
            this.isprojectOwner = registo.isprojectOwner;
            this.isAutorized = registo.isAutorized;
            this.project = registo.project ? new _maintenance_viewmodels_projectViewModel__WEBPACK_IMPORTED_MODULE_1__["ProjectViewModel"](registo.project) : null;
        }
    }
}


/***/ }),

/***/ "mIb8":
/*!********************************************************************!*\
  !*** ./src/app/signin-signup/signup-form/signup-form.component.ts ***!
  \********************************************************************/
/*! exports provided: SignUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function() { return SignUpFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _viewmodels_userRegistryViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewmodels/userRegistryViewModel */ "/Ld9");
/* harmony import */ var _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contribute/services/contribute.service */ "ievF");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/signup.service */ "M1mf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/functionCall.pipe */ "YgGP");


















function SignUpFormComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.InvalidEmail"), " ");
} }
function SignUpFormComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.EmailAlredyExists"), " ");
} }
function SignUpFormComponent_div_0_div_36_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "Shared.Label.Name"));
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function SignUpFormComponent_div_0_div_36_dx_select_box_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dx-select-box", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "Shared.Label.SelectProject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, ctx_r10.contributeService == null ? null : ctx_r10.contributeService.projectsList, i_r8), ctx_r10.filterProjects, ctx_r10));
} }
function SignUpFormComponent_div_0_div_36_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_36_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_36_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_36_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_36_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignUpFormComponent_div_0_div_36_input_3_Template, 2, 3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignUpFormComponent_div_0_div_36_dx_select_box_4_Template, 3, 11, "dx-select-box", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignUpFormComponent_div_0_div_36_div_5_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignUpFormComponent_div_0_div_36_div_6_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SignUpFormComponent_div_0_div_36_div_10_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpFormComponent_div_0_div_36_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r8 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.removeProject(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "dx-select-box", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SignUpFormComponent_div_0_div_36_div_19_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "dx-select-box", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SignUpFormComponent_div_0_div_36_div_24_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r5.formArrayProjectsControls()[i_r8].get("isNew")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((tmp_2_0 = ctx_r5.formArrayProjectsControls()[i_r8].get("isNew")) == null ? null : tmp_2_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted && item_r7.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted && item_r7.get("id").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, "Shared.Label.Description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted && item_r7.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 19, "Shared.Label.SelectLanguage1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](17, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](27, _c0, ctx_r5.contributeService == null ? null : ctx_r5.contributeService.languagesList, item_r7.controls.l2.value), ctx_r5.removeLanguage, ctx_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted && item_r7.get("l1").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 25, "Shared.Label.SelectLanguage2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](22, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](30, _c0, ctx_r5.contributeService == null ? null : ctx_r5.contributeService.languagesList, item_r7.controls.l1.value), ctx_r5.removeLanguage, ctx_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted && item_r7.get("l2").hasError("required"));
} }
function SignUpFormComponent_div_0_div_47_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignUpFormComponent_div_0_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dx-select-box", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "functionCall");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignUpFormComponent_div_0_div_47_div_5_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dx-slider", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpFormComponent_div_0_div_47_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const i_r20 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.removeProficiencyLanguage(i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_6_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, "Shared.Label.SelectLanguage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c0, ctx_r6.contributeService == null ? null : ctx_r6.contributeService.languagesList, i_r20), ctx_r6.filterLanguages, ctx_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted && item_r19.get("id").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", 0)("max", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formArrayProficiencyLanguagesControls()[i_r20] == null ? null : (tmp_6_0 = ctx_r6.formArrayProficiencyLanguagesControls()[i_r20].get("levelProficiency")) == null ? null : tmp_6_0.value);
} }
function SignUpFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignUpFormComponent_div_0_div_12_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignUpFormComponent_div_0_div_20_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignUpFormComponent_div_0_div_21_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SignUpFormComponent_div_0_div_22_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpFormComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.addProject(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpFormComponent_div_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.addProject(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SignUpFormComponent_div_0_div_36_Template, 25, 33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpFormComponent_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.addProficiencyLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, SignUpFormComponent_div_0_div_47_Template, 13, 16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpFormComponent_div_0_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_11_0 = null;
    let tmp_13_0 = null;
    let tmp_17_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 21, "SignInSignUpComponent.Label.SignUp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 23, "Shared.Label.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 25, "Shared.Label.Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 27, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 29, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.get("email").hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.get("email").hasError("alredyExist"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 31, "Shared.Label.Projects"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.form == null ? null : (tmp_11_0 = ctx_r0.form.get("projects")) == null ? null : tmp_11_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 33, "Shared.Label.Create"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.form == null ? null : (tmp_13_0 = ctx_r0.form.get("projects")) == null ? null : tmp_13_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 35, "Shared.Label.Add"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formArrayProjectsControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 37, "Shared.Label.ProficiencyLanguages"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.form == null ? null : (tmp_17_0 = ctx_r0.form.get("proficiencyLanguages")) == null ? null : tmp_17_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 39, "Shared.Label.Add"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.formArrayProficiencyLanguagesControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 41, "SignInSignUpComponent.Label.Register"), " ");
} }
let SignUpFormComponent = class SignUpFormComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(contributeService, signUpService, formBuilder, router, spinner, toastr, translateService) {
        super();
        this.contributeService = contributeService;
        this.signUpService = signUpService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinner = spinner;
        this.toastr = toastr;
        this.translateService = translateService;
        this.isFormSubmitted = false;
    }
    formArrayProficiencyLanguagesControls() {
        return this.form.get('proficiencyLanguages').controls;
    }
    formArrayProjectsControls() {
        return this.form.get('projects').controls;
    }
    ngOnInit() {
        this.incrementIsBusy();
        this.initializeForm();
        this.decrementIsBusy();
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    signUp() {
        this.isFormSubmitted = true;
        if (this.form.valid) {
            const userRegister = this.saveFormValues();
            this.incrementIsBusy();
            this.spinner.show();
            this.signUpService.registerUser(userRegister)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                this.spinner.hide();
                if (response) {
                    this.toastr.success(this.translateService.instant('SignInSignUpComponent.Message.AccountCreatedCheckEmail'));
                    this.router.navigate(['/'], { replaceUrl: true })
                        .then((navigationResult) => {
                        if (navigationResult) {
                            this.router.navigate(['/signin-signup'], { replaceUrl: true });
                        }
                    });
                }
                else {
                    this.toastr.warning(this.translateService.instant('Shared.Message.IncorrectData'));
                }
                this.spinner.hide();
                this.decrementIsBusy();
            }, () => {
                this.spinner.hide();
                this.toastr.error(this.translateService.instant('SignInSignUpComponent.Message.ErrorRegisteringUser'));
                this.decrementIsBusy();
            });
        }
    }
    addProficiencyLanguage() {
        const newFormGroup = this.formBuilder.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            levelProficiency: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.form.controls.proficiencyLanguages.insert(0, newFormGroup);
        if (this.form.controls.proficiencyLanguages.length > 1) {
            this.form.get('proficiencyLanguages.1.id').disable();
        }
    }
    removeProficiencyLanguage(index) {
        this.form.controls.proficiencyLanguages.controls.splice(index, 1);
        this.form.controls.proficiencyLanguages.updateValueAndValidity();
        if (this.form.controls.proficiencyLanguages.length > 0) {
            this.form.get('proficiencyLanguages.0.id').enable();
        }
        this.contributeService.languagesList = this.contributeService.languagesList.slice();
    }
    addProject(isNew) {
        const newFormGroup = this.formBuilder.group({
            id: [{ value: null, disabled: isNew }, isNew ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: [{ value: '', disabled: !isNew }, isNew ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
            description: [{ value: '', disabled: !isNew }, isNew ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
            l1: [{ value: null, disabled: !isNew }, isNew ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
            l2: [{ value: null, disabled: !isNew }, isNew ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] : []],
            isNew: [isNew, []]
        });
        if (!isNew) {
            newFormGroup.get('id').valueChanges
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((value) => {
                const project = this.contributeService.projectsList.find(x => x.id === value);
                if (project) {
                    newFormGroup.get('name').setValue(project.name, { emitEvent: false });
                    newFormGroup.get('description').setValue(project.descr, { emitEvent: false });
                    newFormGroup.get('l1').setValue(project.language1Id, { emitEvent: false });
                    newFormGroup.get('l2').setValue(project.language2Id, { emitEvent: false });
                }
                else {
                    newFormGroup.get('name').setValue('', { emitEvent: false });
                    newFormGroup.get('description').setValue('', { emitEvent: false });
                    newFormGroup.get('l1').setValue(null, { emitEvent: false });
                    newFormGroup.get('l2').setValue(null, { emitEvent: false });
                }
            });
        }
        this.form.controls.projects.insert(0, newFormGroup);
        if (this.form.controls.projects.length > 1) {
            this.form.get('projects.1.id').disable();
        }
    }
    removeProject(index) {
        this.form.controls.projects.controls.splice(index, 1);
        this.form.controls.projects.updateValueAndValidity();
        if (this.form.controls.projects.length > 0) {
            this.form.get('projects.0.id').enable();
        }
        this.contributeService.projectsList = this.contributeService.projectsList.slice();
    }
    filterLanguages([languages, index]) {
        if (!languages) {
            return [];
        }
        const languagesSelected = this.form.get('proficiencyLanguages').controls.map(x => x.get('id').value);
        languagesSelected.splice(index, 1);
        return languages.filter(x => !languagesSelected.includes(x.id));
    }
    filterProjects([projects, index]) {
        if (!projects) {
            return [];
        }
        const projectsSelected = this.form.get('projects').controls.map(x => x.get('id').value);
        projectsSelected.splice(index, 1);
        return projects.filter(x => !projectsSelected.includes(x.id));
    }
    removeLanguage([languagesList, languageId]) {
        if (languagesList) {
            return languagesList.filter(x => x.id !== languageId);
        }
        return [];
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            proficiencyLanguages: this.formBuilder.array([]),
            projects: this.formBuilder.array([]),
        });
        this.form.get('email').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            if (!this.form.get('email').hasError('required') && !this.form.get('email').hasError('email')) {
                if (this.existsEmail$) {
                    this.existsEmail$.unsubscribe();
                }
                this.existsEmail$ = this.signUpService.emailExists(value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    if (response) {
                        this.form.get('email').setErrors({ alredyExist: true }, { emitEvent: true });
                    }
                    else {
                        this.form.get('email').setErrors(null, { emitEvent: true });
                    }
                }, () => {
                });
            }
        });
    }
    saveFormValues() {
        const userRegister = new _viewmodels_userRegistryViewModel__WEBPACK_IMPORTED_MODULE_6__["UserRegisterViewModel"]();
        userRegister.name = this.form.controls.name.value;
        userRegister.email = this.form.controls.email.value;
        userRegister.proficiencyLanguages = this.formArrayProficiencyLanguagesControls()
            .map(x => {
            return {
                userId: null,
                languageId: x.controls.id.value,
                levelProficiency: x.controls.levelProficiency.value
            };
        });
        userRegister.userProjects = this.formArrayProjectsControls()
            .map(x => {
            return {
                userId: null,
                projectId: x.controls.id.value,
                isProjectOwner: x.controls.isNew.value,
                isAutorized: x.controls.isNew.value,
                project: {
                    id: x.controls.id.value,
                    name: x.controls.name.value,
                    descr: x.controls.description.value,
                    language1Id: x.controls.l1.value,
                    language2Id: x.controls.l2.value,
                }
            };
        });
        return userRegister;
    }
};
SignUpFormComponent.ɵfac = function SignUpFormComponent_Factory(t) { return new (t || SignUpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_signup_service__WEBPACK_IMPORTED_MODULE_8__["SignUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"])); };
SignUpFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpFormComponent, selectors: [["app-signup-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [["class", "container-form", 4, "ngIf"], ["type", "ball-clip-rotate-pulse"], [1, "container-form"], [1, "text-center"], [1, "row", 3, "formGroup"], [1, "col-12"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger mt-1 p-1", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "col-12", "form-group"], [1, "border-header"], [1, "d-flex", "align-items-center", "p-2"], [1, "m-0"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", "ml-auto", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["formArrayName", "projects"], ["class", "list-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "ml-auto", 3, "disabled", "click"], ["formArrayName", "proficiencyLanguages"], ["class", "d-flex align-items-top justify-content-center list-item p-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "alert", "alert-danger", "mt-1", "p-1"], [1, "list-item", 3, "formGroupName"], [1, "d-flex", "align-items-top", "justify-content-center", "p-2"], [1, "col-4", "pl-0"], ["class", "form-control", "formControlName", "name", 3, "placeholder", 4, "ngIf"], ["class", "form-control heiht-38", "valueExpr", "id", "displayExpr", "name", "formControlName", "id", 3, "dataSource", "placeholder", 4, "ngIf"], ["class", "alert alert-danger mt-1 p-1 mb-0", 4, "ngIf"], [1, "col-7"], ["formControlName", "description", 1, "form-control", 3, "placeholder"], [1, "col-1", "pr-0"], ["type", "button", 1, "btn", "btn-outline-danger", "w-100", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "col-6", "pl-0"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "l1", 1, "form-control", 3, "dataSource", "placeholder"], [1, "col-6", "pr-0"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "l2", 1, "form-control", 3, "dataSource", "placeholder"], ["formControlName", "name", 1, "form-control", 3, "placeholder"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "id", 1, "form-control", "heiht-38", 3, "dataSource", "placeholder"], [1, "alert", "alert-danger", "mt-1", "p-1", "mb-0"], [1, "d-flex", "align-items-top", "justify-content-center", "list-item", "p-2", 3, "formGroupName"], ["valueExpr", "id", "displayExpr", "name", "formControlName", "id", 1, "form-control", 3, "dataSource", "placeholder"], ["formControlName", "levelProficiency", 3, "min", "max"], [1, "col-1", "p-0", "levelProficiencyValue", "d-flex", "align-items-center", "justify-content-center"]], template: function SignUpFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SignUpFormComponent_div_0_Template, 52, 43, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-spinner", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_14__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_14__["DxSliderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _shared_pipes_functionCall_pipe__WEBPACK_IMPORTED_MODULE_15__["FunctionCallPipe"]], styles: [".container-form[_ngcontent-%COMP%] {\n  padding-left: 90px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: 26px;\n}\n\n.border-header[_ngcontent-%COMP%] {\n  border: 1px solid #001f3f;\n  border-radius: 0.25em;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #001f3f;\n}\n\n.list-item[_ngcontent-%COMP%]   .levelProficiencyValue[_ngcontent-%COMP%] {\n  border: 1px solid #001f3f;\n  border-radius: 0.25em;\n  height: 35px;\n  opacity: 0.5;\n}\n\n.list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.heiht-38[_ngcontent-%COMP%] {\n  height: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsNkVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtBQUFGOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBS0E7RUFDRSxZQUFBO0FBRkYiLCJmaWxlIjoic2lnbnVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgXG59XG5cbi5ib3JkZXItaGVhZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMWYzZjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDFmM2Y7XG5cbiAgLmxldmVsUHJvZmljaWVuY3lWYWx1ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMWYzZjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG9wYWNpdHk6IDAuNVxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLmhlaWh0LTM4IHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuIl19 */"] });
SignUpFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], SignUpFormComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignUpFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-signup-form',
                templateUrl: './signup-form.component.html',
                styleUrls: ['./signup-form.component.scss']
            }]
    }], function () { return [{ type: _contribute_services_contribute_service__WEBPACK_IMPORTED_MODULE_7__["ContributeService"] }, { type: _services_signup_service__WEBPACK_IMPORTED_MODULE_8__["SignUpService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "olX5":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/cache.interceptor.ts ***!
  \********************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http-cache.service */ "by1c");





/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
class CacheInterceptor {
    constructor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    /**
     * Configures interceptor options
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    configure(options) {
        const instance = new CacheInterceptor(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    }
    intercept(request, next) {
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((subscriber) => {
            const cachedData = this.forceUpdate ? null : this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request).subscribe(event => {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                        this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, error => subscriber.error(error), () => subscriber.complete());
            }
        });
    }
}
CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) { return new (t || CacheInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"])); };
CacheInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheInterceptor, factory: CacheInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http.service */ "bUwk");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ "cplz");






class CoreModule {
    constructor(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        },
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                        useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
                    },
                    _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "q0+R":
/*!****************************************************************!*\
  !*** ./src/app/maintenance/viewmodels/projectUserViewModel.ts ***!
  \****************************************************************/
/*! exports provided: ProjectUserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUserViewModel", function() { return ProjectUserViewModel; });
class ProjectUserViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.userId = registo.userId;
            this.userName = registo.userName;
            this.projectId = registo.projectId;
            this.isprojectOwner = registo.isprojectOwner;
            this.isAutorized = registo.isAutorized;
        }
    }
}


/***/ }),

/***/ "rW7k":
/*!***********************************************************************************!*\
  !*** ./src/app/contribute/translate/contribute-translate-lista-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContributeTranslateListaItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeTranslateListaItemComponent", function() { return ContributeTranslateListaItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/modeEnum */ "HtUT");
/* harmony import */ var _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../viewmodels/sentenceViewModel */ "NktI");
/* harmony import */ var _viewmodels_translationViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewmodels/translationViewModel */ "FnbC");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_contribute_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/contribute.service */ "ievF");
/* harmony import */ var _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/services/credentials.service */ "DR2l");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function ContributeTranslateListaItemComponent_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.item.lastSentenceTranslation == null ? null : ctx_r2.item.lastSentenceTranslation.text);
} }
function ContributeTranslateListaItemComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.item == null ? null : ctx_r3.item.countTranslations);
} }
function ContributeTranslateListaItemComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_1_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_1_div_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "ContributeComponent.Label.InsertTranslation"));
} }
const _c0 = function (a0, a1) { return { "lista-item-selected": a0, "lista-item-disabled": a1 }; };
const _c1 = function (a0) { return { "invisible": a0 }; };
function ContributeTranslateListaItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onClickDeleteTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onClickEditTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onClickNewTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ContributeTranslateListaItemComponent_div_1_span_13_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ContributeTranslateListaItemComponent_div_1_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ContributeTranslateListaItemComponent_div_1_div_15_Template, 8, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx_r0.contributeService.sentenceSelect === ctx_r0.item, ctx_r0.contributeService.sentenceSelect && ctx_r0.contributeService.sentenceSelect !== ctx_r0.item));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, !ctx_r0.item.lastSentenceTranslation || !ctx_r0.isEditor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, !ctx_r0.item.lastSentenceTranslation || !ctx_r0.isEditor));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.form && ctx_r0.item.lastSentenceTranslation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.form && ctx_r0.item.lastSentenceTranslation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form);
} }
function ContributeTranslateListaItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContributeTranslateListaItemComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, ctx_r1.contributeService.sentenceSelect === ctx_r1.item, ctx_r1.contributeService.sentenceSelect && ctx_r1.contributeService.sentenceSelect !== ctx_r1.item))("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "ContributeComponent.Label.InsertSentence"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, "ContributeComponent.Label.InsertTranslation"));
} }
let ContributeTranslateListaItemComponent = class ContributeTranslateListaItemComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(contributeService, credentialsService, formBuilder, ref, toastr, spinner, translateService) {
        super();
        this.contributeService = contributeService;
        this.credentialsService = credentialsService;
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.toastr = toastr;
        this.spinner = spinner;
        this.translateService = translateService;
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditor = false;
    }
    ngOnInit() {
        this.isEditor = this.credentialsService.isEditor();
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        if (!this.item.text) {
            this.mode = _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].CREATE;
            this.form = this.formBuilder.group({
                textL1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                textL2: ['', this.isEditor ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    }
    ngOnDestroy() {
        this.spinner.hide(this.id);
    }
    onClickDeleteTranslation() {
        this.spinner.show(this.id);
        this.contributeService.deleteTranslation(this.item.lastSentenceTranslationId, this.item.id)
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.item.copyFrom(new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](response));
            this.ref.detectChanges();
            this.spinner.hide(this.id);
            this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationSuccessfullyDeleted'));
        }, () => {
            this.spinner.hide(this.id);
            this.toastr.success(this.translateService.instant('ContributeComponent.Message.ErrorDeletingTranslation'));
        });
    }
    onClickNewTranslation() {
        this.contributeService.sentenceSelect = this.item;
        this.searchL1.disable({ emitEvent: false });
        this.searchL2.disable({ emitEvent: false });
        this.contributeService.projectControl.disable({ emitEvent: false });
        this.mode = _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].ADD;
        this.initializeForm();
        this.ref.detectChanges();
    }
    onClickEditTranslation() {
        this.contributeService.sentenceSelect = this.item;
        this.searchL1.disable({ emitEvent: false });
        this.searchL2.disable({ emitEvent: false });
        this.contributeService.projectControl.disable({ emitEvent: false });
        this.mode = _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].EDIT;
        this.initializeForm();
        this.ref.detectChanges();
    }
    onCancel() {
        this.form = null;
        this.contributeService.sentenceSelect = null;
        this.searchL1.enable({ emitEvent: false });
        this.searchL2.enable({ emitEvent: false });
        this.contributeService.projectControl.enable({ emitEvent: false });
        if (this.mode === _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].CREATE) {
            this.deleteItem.emit(this.item);
        }
        this.mode = null;
        this.ref.detectChanges();
    }
    onSave() {
        if (this.form.valid) {
            switch (this.mode) {
                case _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].ADD:
                    this.insertTranslation();
                    break;
                case _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].EDIT:
                    this.updateTranslation();
                    break;
                case _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].CREATE:
                    if (this.form && this.form.get('textL2').value && this.form.get('textL2').value.trim().length > 0) {
                        this.createTranslation();
                    }
                    else {
                        this.createSentence();
                    }
                    break;
            }
        }
        else {
            this.toastr.warning(this.translateService.instant('ContributeComponent.Message.InvalidText'));
        }
    }
    updateTranslation() {
        const translation = new _viewmodels_translationViewModel__WEBPACK_IMPORTED_MODULE_7__["TranslationViewModel"]();
        translation.id = this.item.lastSentenceTranslationId;
        translation.sentenceSpoken = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](this.item);
        translation.sentenceSpoken.lastSentenceTranslation = null;
        translation.sentenceSpokenId = this.item.id;
        translation.sentenceSign = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](this.item.lastSentenceTranslation);
        translation.sentenceSignId = this.item.lastSentenceTranslation.id;
        translation.sentenceSign.text = this.form.controls.text.value;
        if (this.credentialsService.isAuthenticated()) {
            translation.userChangeId = this.credentialsService.getCredentials.id;
            translation.sentenceSign.userChangeId = this.credentialsService.getCredentials.id;
        }
        this.spinner.show(this.id);
        this.contributeService.updateTranslation(translation)
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.item.copyFrom(new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](response));
            this.form = null;
            this.contributeService.sentenceSelect = null;
            this.mode = null;
            this.searchL1.enable({ emitEvent: false });
            this.searchL2.enable({ emitEvent: false });
            this.contributeService.projectControl.enable({ emitEvent: false });
            this.spinner.hide(this.id);
            this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationUpdatedSuccessfully'));
        }, () => {
            this.spinner.hide(this.id);
            this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorUpdatingTranslation'));
        });
    }
    insertTranslation() {
        const newSentenceL2 = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"]();
        newSentenceL2.languageId = this.language2;
        newSentenceL2.text = this.form.controls.text.value;
        newSentenceL2.projectId = this.contributeService.projectControl.value;
        const newTranslation = new _viewmodels_translationViewModel__WEBPACK_IMPORTED_MODULE_7__["TranslationViewModel"]();
        newTranslation.sentenceSpoken = this.item;
        newTranslation.sentenceSpokenId = this.item.id;
        newTranslation.sentenceSign = newSentenceL2;
        if (this.credentialsService.isAuthenticated()) {
            newSentenceL2.userCreationId = this.credentialsService.getCredentials.id;
            newSentenceL2.userChangeId = this.credentialsService.getCredentials.id;
            newTranslation.userCreationId = this.credentialsService.getCredentials.id;
            newTranslation.userChangeId = this.credentialsService.getCredentials.id;
        }
        this.spinner.show(this.id);
        this.contributeService.insertTranslation(newTranslation)
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.item.copyFrom(new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](response));
            this.form = null;
            this.contributeService.sentenceSelect = null;
            this.mode = null;
            this.searchL1.enable({ emitEvent: false });
            this.searchL2.enable({ emitEvent: false });
            this.contributeService.projectControl.enable({ emitEvent: false });
            this.spinner.hide(this.id);
            this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationInsertedSuccessfully'));
        }, () => {
            this.spinner.hide(this.id);
            this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingTranslation'));
        });
    }
    createTranslation() {
        if (this.form && this.form.valid) {
            const newSentenceL1 = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"]();
            newSentenceL1.id = null;
            newSentenceL1.languageId = this.item.languageId;
            newSentenceL1.text = this.form.get('textL1').value;
            newSentenceL1.projectId = this.contributeService.projectControl.value;
            const newSentenceL2 = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"]();
            newSentenceL2.id = null;
            newSentenceL2.languageId = this.item.lastSentenceTranslation.languageId;
            newSentenceL2.text = this.form.get('textL2').value;
            newSentenceL2.projectId = this.contributeService.projectControl.value;
            const newTranslation = new _viewmodels_translationViewModel__WEBPACK_IMPORTED_MODULE_7__["TranslationViewModel"]();
            newTranslation.sentenceSpoken = newSentenceL1;
            newTranslation.sentenceSign = newSentenceL2;
            if (this.credentialsService.isAuthenticated()) {
                newSentenceL1.userCreationId = this.credentialsService.getCredentials.id;
                newSentenceL1.userChangeId = this.credentialsService.getCredentials.id;
                newSentenceL2.userCreationId = this.credentialsService.getCredentials.id;
                newSentenceL2.userChangeId = this.credentialsService.getCredentials.id;
                newTranslation.userCreationId = this.credentialsService.getCredentials.id;
                newTranslation.userChangeId = this.credentialsService.getCredentials.id;
            }
            this.spinner.show(this.id);
            this.contributeService.insertTranslation(newTranslation)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                this.item.copyFrom(new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](response));
                this.form = null;
                this.contributeService.sentenceSelect = null;
                this.mode = null;
                this.searchL1.enable({ emitEvent: false });
                this.searchL2.enable({ emitEvent: false });
                this.contributeService.projectControl.enable({ emitEvent: false });
                this.deleteItem.emit(null);
                this.spinner.hide(this.id);
                this.toastr.success(this.translateService.instant('ContributeComponent.Message.TranslationInsertedSuccessfully'));
            }, () => {
                this.spinner.hide(this.id);
                this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingTranslation'));
            });
        }
    }
    createSentence() {
        if (this.form && this.form.valid) {
            const newSentenceL1 = new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"]();
            newSentenceL1.id = null;
            newSentenceL1.languageId = this.item.languageId;
            newSentenceL1.text = this.form.get('textL1').value;
            newSentenceL1.projectId = this.contributeService.projectControl.value;
            if (this.credentialsService.isAuthenticated()) {
                newSentenceL1.userCreationId = this.credentialsService.getCredentials.id;
                newSentenceL1.userChangeId = this.credentialsService.getCredentials.id;
            }
            this.spinner.show(this.id);
            this.contributeService.insertSentences([newSentenceL1])
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                this.item.copyFrom(new _viewmodels_sentenceViewModel__WEBPACK_IMPORTED_MODULE_6__["SentenceViewModel"](response[0]));
                this.form = null;
                this.contributeService.sentenceSelect = null;
                this.mode = null;
                this.searchL1.enable({ emitEvent: false });
                this.searchL2.enable({ emitEvent: false });
                this.contributeService.projectControl.enable({ emitEvent: false });
                this.deleteItem.emit(null);
                this.spinner.hide(this.id);
                this.toastr.success(this.translateService.instant('ContributeComponent.Message.SentenceInsertedSuccessfully'));
            }, () => {
                this.spinner.hide(this.id);
                this.toastr.error(this.translateService.instant('ContributeComponent.Message.ErrorInsertingSentence'));
            });
        }
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            text: [this.mode === _shared_helpers_modeEnum__WEBPACK_IMPORTED_MODULE_5__["ModeEnum"].ADD ? '' : this.item.lastSentenceTranslation.text, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
ContributeTranslateListaItemComponent.ɵfac = function ContributeTranslateListaItemComponent_Factory(t) { return new (t || ContributeTranslateListaItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contribute_service__WEBPACK_IMPORTED_MODULE_9__["ContributeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_credentials_service__WEBPACK_IMPORTED_MODULE_10__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"])); };
ContributeTranslateListaItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContributeTranslateListaItemComponent, selectors: [["app-contribute-translate-lista-item"]], inputs: { item: "item", language1: "language1", language2: "language2", searchL1: "searchL1", searchL2: "searchL2" }, outputs: { deleteItem: "deleteItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[1, "position-relative"], ["class", "row m-0 p-0 lista-item border-bottom", 3, "ngClass", 4, "ngIf"], ["class", "row m-0 p-0 d-flex align-items-center lista-item border-bottom", 3, "ngClass", "formGroup", 4, "ngIf"], ["type", "ball-pulse-sync", "size", "small", 3, "fullScreen", "name"], [1, "row", "m-0", "p-0", "lista-item", "border-bottom", 3, "ngClass"], [1, "col", "d-flex", "align-items-center"], [1, "col-1", "d-flex", "align-items-center", "p-0", "border-left", "border-right", "d-flex", "justify-content-center", "align-items-center"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-square"], [4, "ngIf"], ["class", "badge badge-primary ml-auto", 4, "ngIf"], ["class", "d-flex w-100 py-1", 3, "formGroup", 4, "ngIf"], [1, "badge", "badge-primary", "ml-auto"], [1, "d-flex", "w-100", "py-1", 3, "formGroup"], [1, "btn", "btn-outline-danger", "btn-sm", "border-right-radius-0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["formControlName", "text", 1, "form-control", "rounded-0", 3, "placeholder"], [1, "btn", "btn-outline-success", "btn-sm", "border-left-radius-0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "row", "m-0", "p-0", "d-flex", "align-items-center", "lista-item", "border-bottom", 3, "ngClass", "formGroup"], ["row", ""], [1, "col"], ["formControlName", "textL1", 1, "form-control", 3, "placeholder"], [1, "col-1", "p-0", "border-left", "border-right", "d-flex", "justify-content-center", "align-items-center"], [1, "btn", "btn-outline-danger", "btn-sm", "mr-1", 3, "click"], [1, "btn", "btn-outline-success", "btn-sm", "ml-2", 3, "click"], [1, "d-flex", "py-1"], ["formControlName", "textL2", 1, "form-control", 3, "placeholder"]], template: function ContributeTranslateListaItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContributeTranslateListaItemComponent_div_1_Template, 16, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContributeTranslateListaItemComponent_div_2_Template, 16, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item.text && ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false)("name", ctx.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n\n.border-left-radius-0[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.border-right-radius-0[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  max-height: 42px;\n}\n\n.lista-item-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  min-width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250cmlidXRlLXRyYW5zbGF0ZS1saXN0YS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUYiLCJmaWxlIjoiY29udHJpYnV0ZS10cmFuc2xhdGUtbGlzdGEtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZmZmNztcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThkYzg7XG4gIGJhY2tncm91bmQ6ICNlNmZmZjc7XG59XG5cblxuLmJvcmRlci1sZWZ0LXJhZGl1cy0wIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmJvcmRlci1yaWdodC1yYWRpdXMtMCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxudGV4dGFyZWEge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDQycHg7XG59XG5cbi5saXN0YS1pdGVtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1zbSB7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cbiJdfQ== */"] });
ContributeTranslateListaItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], ContributeTranslateListaItemComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContributeTranslateListaItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contribute-translate-lista-item',
                templateUrl: './contribute-translate-lista-item.component.html',
                styleUrls: ['./contribute-translate-lista-item.component.scss']
            }]
    }], function () { return [{ type: _services_contribute_service__WEBPACK_IMPORTED_MODULE_9__["ContributeService"] }, { type: _core_services_credentials_service__WEBPACK_IMPORTED_MODULE_10__["CredentialsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], language1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], language2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchL1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchL2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], deleteItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "u9Jt":
/*!*************************************************************!*\
  !*** ./src/app/maintenance/viewmodels/languageViewModel.ts ***!
  \*************************************************************/
/*! exports provided: LanguageViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageViewModel", function() { return LanguageViewModel; });
class LanguageViewModel {
    constructor(registo) {
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.id = registo.id;
            this.name = registo.name;
            this.abbreviation = registo.abbreviation;
            this.type = registo.type;
        }
    }
}


/***/ }),

/***/ "uXFV":
/*!************************************************************!*\
  !*** ./src/app/maintenance/viewmodels/projectViewModel.ts ***!
  \************************************************************/
/*! exports provided: ProjectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewModel", function() { return ProjectViewModel; });
/* harmony import */ var _projectUserViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectUserViewModel */ "q0+R");

class ProjectViewModel {
    constructor(registo) {
        this.projectUsers = [];
        this.copyFrom(registo);
    }
    copyFrom(registo) {
        if (registo) {
            this.id = registo.id;
            this.name = registo.name;
            this.description = registo.description;
            this.language1Id = registo.language1Id;
            this.language1Name = registo.language1Name;
            this.language2Id = registo.language2Id;
            this.language2Name = registo.language2Name;
            this.active = registo.active;
            this.userCreationId = registo.userCreationId;
            this.dateCreation = registo.dateCreation;
            this.userChangeId = registo.userChangeId;
            this.dateChange = registo.dateChange;
            this.projectUsers = registo.projectUsers ? registo.projectUsers.map(x => new _projectUserViewModel__WEBPACK_IMPORTED_MODULE_0__["ProjectUserViewModel"](x)) : [];
            this.countSentencesL1 = registo.countSentencesL1;
            this.countSentencesL1WithTranslation = registo.countSentencesL1WithTranslation;
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contribute/contribute.component */ "XqVx");
/* harmony import */ var _contribute_download_contribute_download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contribute/download/contribute-download.component */ "Po4a");
/* harmony import */ var _contribute_projects_contribute_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contribute/projects/contribute-projects.component */ "jqbX");
/* harmony import */ var _contribute_search_contribute_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contribute/search/contribute-search.component */ "F/X4");
/* harmony import */ var _contribute_translate_contribute_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contribute/translate/contribute-translate.component */ "Q+cc");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _maintenance_maintenance_download_settings_maintenance_download_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maintenance/maintenance-download-settings/maintenance-download-settings.component */ "Sszs");
/* harmony import */ var _maintenance_maintenance_languages_maintenance_languages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance-languages/maintenance-languages.component */ "UZT+");
/* harmony import */ var _maintenance_maintenance_projects_maintenance_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maintenance/maintenance-projects/maintenance-projects.component */ "4Vrr");
/* harmony import */ var _maintenance_maintenance_users_maintenance_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maintenance/maintenance-users/maintenance-users.component */ "w4RS");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "yhB2");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin-signup/signin-signup.component */ "F6YZ");

















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    {
        path: 'contribute',
        component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_2__["ContributeComponent"],
        children: [
            { path: 'translate', component: _contribute_translate_contribute_translate_component__WEBPACK_IMPORTED_MODULE_6__["ContributeTranslateComponent"] },
            { path: 'projects', component: _contribute_projects_contribute_projects_component__WEBPACK_IMPORTED_MODULE_4__["ContributeProjectsComponent"] },
            { path: 'search', component: _contribute_search_contribute_search_component__WEBPACK_IMPORTED_MODULE_5__["ContributeSearchComponent"] },
            { path: 'download', component: _contribute_download_contribute_download_component__WEBPACK_IMPORTED_MODULE_3__["ContributeDownloadComponent"] }
        ]
    },
    {
        path: 'maintenance',
        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_12__["MaintenanceComponent"],
        children: [
            { path: 'users', component: _maintenance_maintenance_users_maintenance_users_component__WEBPACK_IMPORTED_MODULE_11__["MaintenanceUsersComponent"] },
            { path: 'projects', component: _maintenance_maintenance_projects_maintenance_projects_component__WEBPACK_IMPORTED_MODULE_10__["MaintenanceProjectsComponent"] },
            { path: 'languages', component: _maintenance_maintenance_languages_maintenance_languages_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceLanguagesComponent"] },
            { path: 'downloadsettings', component: _maintenance_maintenance_download_settings_maintenance_download_settings_component__WEBPACK_IMPORTED_MODULE_8__["MaintenanceDownloadSettingsComponent"] }
        ]
    },
    { path: 'signin-signup', component: _signin_signup_signin_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignInSignUpComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w4RS":
/*!******************************************************************************!*\
  !*** ./src/app/maintenance/maintenance-users/maintenance-users.component.ts ***!
  \******************************************************************************/
/*! exports provided: MaintenanceUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceUsersComponent", function() { return MaintenanceUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/baseComponent */ "Vy8h");
/* harmony import */ var _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/roleEnum */ "f44z");
/* harmony import */ var _viewmodels_userRoleViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../viewmodels/userRoleViewModel */ "7zW1");
/* harmony import */ var _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewmodels/userViewModel */ "Qx/V");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/maintenance.service */ "T59Z");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
















const _c0 = function (a0) { return { "lista-item-selected": a0 }; };
function MaintenanceUsersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceUsersComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const user_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSelectItem(user_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentUser === user_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r2 == null ? null : user_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r2 == null ? null : user_r2.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r2 == null ? null : user_r2.userRoles[0] == null ? null : user_r2.userRoles[0].roleName, " ");
} }
function MaintenanceUsersComponent_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "dx-select-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceUsersComponent_div_19_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceUsersComponent_div_19_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Name", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Email", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Role", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r6.listRoles);
} }
function MaintenanceUsersComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MaintenanceUsersComponent_div_19_ng_container_1_Template, 25, 5, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isBusy && ctx_r1.form);
} }
let MaintenanceUsersComponent = class MaintenanceUsersComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(formBuilder, toastr, maintenanceService, spinner) {
        super();
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.maintenanceService = maintenanceService;
        this.spinner = spinner;
        this.listRoles = [
            { id: _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_5__["RoleEnum"].Root, name: 'Root' },
            { id: _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_5__["RoleEnum"].Admin, name: 'Admin' },
            { id: _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_5__["RoleEnum"].Editor, name: 'Editor' },
            { id: _shared_helpers_roleEnum__WEBPACK_IMPORTED_MODULE_5__["RoleEnum"].Regular, name: 'Regular' },
        ];
        this.currentUser = null;
        this.popupVisible = false;
        this.isFormSubmitted = false;
    }
    ngOnInit() {
        this.loadRegistos();
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    onSelectItem(user) {
        this.isFormSubmitted = false;
        this.currentUser = user;
        this.initializeForm();
        this.popupVisible = true;
    }
    onCancel() {
        this.popupVisible = false;
        this.form = null;
        this.currentUser = null;
        this.isFormSubmitted = false;
    }
    onSave() {
        this.isFormSubmitted = true;
        if (this.form && this.form.valid) {
            const registo = new _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_7__["UserViewModel"]();
            registo.id = this.form.get('id').value;
            registo.name = this.form.get('name').value;
            registo.email = this.form.get('email').value;
            registo.userRoles = [];
            if (this.form.get('roleId').value) {
                const role = new _viewmodels_userRoleViewModel__WEBPACK_IMPORTED_MODULE_6__["UserRoleViewModel"]();
                role.userId = this.form.get('id').value;
                role.roleId = this.form.get('roleId').value;
                registo.userRoles.push(role);
            }
            if (this.currentUser && this.currentUser.id) { // UPDATE
                this.incrementIsBusy();
                this.maintenanceService.updateUser(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.currentUser.copyFrom(response);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentUser = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao atualizar o utilizador');
                });
            }
            else { // INSERT
                this.incrementIsBusy();
                this.maintenanceService.insertUser(registo)
                    .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    this.currentUser = new _viewmodels_userViewModel__WEBPACK_IMPORTED_MODULE_7__["UserViewModel"](response);
                    this.listUsers.push(this.currentUser);
                    this.popupVisible = false;
                    this.form = null;
                    this.currentUser = null;
                    this.decrementIsBusy();
                }, () => {
                    this.decrementIsBusy();
                    this.toastr.error('Erro ao inserir novo utilizador');
                });
            }
        }
    }
    loadRegistos() {
        this.spinner.show();
        this.incrementIsBusy();
        this.maintenanceService.getUsers()
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((response) => {
            this.listUsers = response;
            this.decrementIsBusy();
            this.spinner.hide();
        }, () => {
            this.decrementIsBusy();
            this.spinner.hide();
            this.toastr.error('Erro ao carregar registos');
        });
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            id: [this.currentUser.id],
            name: [{ value: this.currentUser.name, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [{ value: this.currentUser.email, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            roleId: [this.currentUser.userRoles && this.currentUser.userRoles[0] ? this.currentUser.userRoles[0].roleId : null, []],
        });
    }
};
MaintenanceUsersComponent.ɵfac = function MaintenanceUsersComponent_Factory(t) { return new (t || MaintenanceUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_maintenance_service__WEBPACK_IMPORTED_MODULE_9__["MaintenanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"])); };
MaintenanceUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintenanceUsersComponent, selectors: [["app-maintenance-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 16, consts: [[1, "btn", "btn-primary", "position-absolute", "btn-add", 3, "disabled"], ["aria-hidden", "true", 1, "fa", "fa-plus-square"], [1, "w-100", "h-100"], [1, "p-scroll"], [1, "row", "m-0", "border-bottom", "bg-white", "lista-row-header"], [1, "col-5", "d-flex", "align-items-center", "border-right"], [1, "col-2", "d-flex", "align-items-center", "border-right"], [1, "container-list", "bg-white", "position-relative"], ["class", "row m-0 border-bottom lista-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "ball-clip-rotate-pulse", 3, "fullScreen"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "row", "m-0", "border-bottom", "lista-item", 3, "ngClass", "click"], [4, "ngIf"], [1, "container-form", 3, "formGroup"], ["direction", "vertical"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], [1, "col-4"], [1, "col-8"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["valueExpr", "id", "displayExpr", "name", "placeholder", "Selecionar", "formControlName", "roleId", 1, "form-control", 3, "dataSource"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], [1, "col-6"], [1, "btn", "btn-danger", "w-100", 3, "click"], [1, "btn", "btn-primary", "w-100", 3, "click"]], template: function MaintenanceUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MaintenanceUsersComponent_div_16_Template, 7, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ngx-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "dx-popup", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MaintenanceUsersComponent_Template_dx_popup_visibleChange_18_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MaintenanceUsersComponent_div_19_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Add", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", "User Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", "60%")("height", "90%")("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxScrollViewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_12__["DxSelectBoxComponent"]], styles: [".container-list[_ngcontent-%COMP%] {\n  height: calc(100% - 49px);\n  overflow-y: scroll;\n}\n\n.popup-buttons[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.container-form[_ngcontent-%COMP%] {\n  height: calc(100% - 34px);\n  overflow-y: auto;\n}\n\n.lista-item[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: context-menu;\n  border-left: 2px solid transparent;\n}\n\n.lista-item[_ngcontent-%COMP%]:hover {\n  background: #e6fff7;\n}\n\n.lista-item-selected[_ngcontent-%COMP%] {\n  border-left: 2px solid #198dc8;\n  background: #e6fff7;\n}\n\n.lista-row-header[_ngcontent-%COMP%] {\n  border-left: 2px solid white;\n  height: 49px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  top: 118px;\n}\n\n.container-check[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWludGVuYW5jZS11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6Im1haW50ZW5hbmNlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OXB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucG9wdXAtYnV0dG9ucyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jb250YWluZXItZm9ybSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5saXN0YS1pdGVtIHtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0YS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZmZmNztcbn1cblxuLmxpc3RhLWl0ZW0tc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOThkYzg7XG4gIGJhY2tncm91bmQ6ICNlNmZmZjc7XG59XG5cbi5saXN0YS1yb3ctaGVhZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgaGVpZ2h0OiA0OXB4O1xufVxuXG4uYnRuLWFkZCB7XG4gIHRvcDogMTE4cHg7XG59XG5cbi5jb250YWluZXItY2hlY2sge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4iXX0= */"] });
MaintenanceUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], MaintenanceUsersComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaintenanceUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maintenance-users',
                templateUrl: './maintenance-users.component.html',
                styleUrls: ['./maintenance-users.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _services_maintenance_service__WEBPACK_IMPORTED_MODULE_9__["MaintenanceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "wndk":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/api-prefix.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");



/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
class ApiPrefixInterceptor {
    intercept(request, next) {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + request.url });
        }
        return next.handle(request);
    }
}
ApiPrefixInterceptor.ɵfac = function ApiPrefixInterceptor_Factory(t) { return new (t || ApiPrefixInterceptor)(); };
ApiPrefixInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiPrefixInterceptor, factory: ApiPrefixInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiPrefixInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "xVkl":
/*!********************************************************************!*\
  !*** ./src/app/signin-signup/signin-form/signin-form.component.ts ***!
  \********************************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _signup_form_viewmodels_passwordResetViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup-form/viewmodels/passwordResetViewModel */ "dyfh");
/* harmony import */ var _viewmodels_userLoginViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewmodels/userLoginViewModel */ "9LNH");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/authentication.service */ "y8gV");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/data.service */ "cplz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../signup-form/services/signup.service */ "M1mf");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");



















function SignInFormComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignInFormComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.InvalidEmail"), " ");
} }
function SignInFormComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.EmailNoExits"), " ");
} }
function SignInFormComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignInFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignInFormComponent_div_0_div_12_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SignInFormComponent_div_0_div_13_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignInFormComponent_div_0_div_14_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignInFormComponent_div_0_div_21_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInFormComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInFormComponent_div_0_Template_span_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onOpenFormResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 12, "SignInSignUpComponent.Label.SignIn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 14, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 16, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.controls["email"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.controls["email"].hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.controls["email"].hasError("noExist"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 18, "Shared.Label.Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 20, "Shared.Label.Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFormSubmitted && ctx_r0.form.controls["password"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 22, "SignInSignUpComponent.Label.Login"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 24, "SignInSignUpComponent.Label.ForgotPassword"));
} }
function SignInFormComponent_div_3_ng_container_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.InvalidEmail"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.EmailNoExits"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignInFormComponent_div_3_ng_container_1_div_3_div_4_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignInFormComponent_div_3_ng_container_1_div_3_div_5_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignInFormComponent_div_3_ng_container_1_div_3_div_6_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Shared.Label.Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.isFormResetPasswordSubmitted && ctx_r12.formResetPassword.controls["email"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.isFormResetPasswordSubmitted && ctx_r12.formResetPassword.controls["email"].hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.isFormResetPasswordSubmitted && ctx_r12.formResetPassword.controls["email"].hasError("noExist"));
} }
function SignInFormComponent_div_3_ng_container_1_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SignInSignUpComponent.Message.InvalidCode"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SignInFormComponent_div_3_ng_container_1_div_4_div_8_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "SignInSignUpComponent.Label.CheckEmailCodeResetPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "SignInSignUpComponent.Label.Code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.isFormResetPasswordSubmitted && (ctx_r13.formResetPassword.controls["code"].hasError("notValid") || ctx_r13.formResetPassword.controls["code"].hasError("required")));
} }
function SignInFormComponent_div_3_ng_container_1_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Message.RequiredField"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SignInSignUpComponent.Message.InvalidPassword"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SignInSignUpComponent.Message.PasswordMinLenght"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SignInFormComponent_div_3_ng_container_1_div_5_div_8_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SignInFormComponent_div_3_ng_container_1_div_5_div_9_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SignInFormComponent_div_3_ng_container_1_div_5_div_10_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "ProfileComponent.Label.NewPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "Shared.Label.Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isFormResetPasswordSubmitted && ctx_r14.formResetPassword.controls["newPassword"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isFormResetPasswordSubmitted && ctx_r14.formResetPassword.controls["newPassword"].hasError("invalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isFormResetPasswordSubmitted && ctx_r14.formResetPassword.controls["newPassword"].hasError("minlength"));
} }
function SignInFormComponent_div_3_ng_container_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInFormComponent_div_3_ng_container_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r25.onSendEmailCodeResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SignInSignUpComponent.Label.SendPasswordResetEmail"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInFormComponent_div_3_ng_container_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r27.onCheckCodeResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SignInSignUpComponent.Label.Submit"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInFormComponent_div_3_ng_container_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r29.onResetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Shared.Label.Save"), " ");
} }
function SignInFormComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dx-scroll-view", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignInFormComponent_div_3_ng_container_1_div_3_Template, 7, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignInFormComponent_div_3_ng_container_1_div_4_Template, 9, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignInFormComponent_div_3_ng_container_1_div_5_Template, 11, 9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SignInFormComponent_div_3_ng_container_1_button_8_Template, 3, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SignInFormComponent_div_3_ng_container_1_button_9_Template, 3, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SignInFormComponent_div_3_ng_container_1_button_10_Template, 3, 3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r10.formResetPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formResetPassword.controls.email.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formResetPassword.controls.code.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formResetPassword.controls.newPassword.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formResetPassword.controls.email.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formResetPassword.controls.code.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formResetPassword.controls.newPassword.enabled);
} }
function SignInFormComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignInFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignInFormComponent_div_3_ng_container_1_Template, 11, 7, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignInFormComponent_div_3_div_2_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isBusy && ctx_r1.formResetPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBusy);
} }
let SignInFormComponent = class SignInFormComponent {
    constructor(authenticationService, dataService, formBuilder, router, signUpService, spinner, toastr, translateService) {
        this.authenticationService = authenticationService;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.signUpService = signUpService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.translateService = translateService;
        this.isFormSubmitted = false;
        this.isBusy = false;
        this.popupVisible = false;
        this.isFormResetPasswordSubmitted = false;
    }
    ngOnInit() {
        this.isBusy = true;
        this.initializeForm();
        this.isBusy = false;
    }
    ngOnDestroy() {
        this.spinner.hide();
    }
    signIn() {
        this.isFormSubmitted = true;
        if (this.form.valid) {
            const userLogin = this.saveFormValues();
            this.spinner.show();
            this.authenticationService.login(userLogin)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                this.spinner.hide();
                if (response) {
                    this.toastr.success(this.translateService.instant('SignInSignUpComponent.Message.LoginSuccessfull'));
                    this.router.navigate(['/'], { replaceUrl: true });
                }
                else {
                    this.toastr.warning(this.translateService.instant('Shared.Message.IncorrectData'));
                }
            }, () => {
                this.spinner.hide();
                this.toastr.error(this.translateService.instant('SignInSignUpComponent.Message.ErrorLoginUser'));
            });
        }
    }
    onOpenFormResetPassword() {
        this.formResetPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            code: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            newPassword: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
        });
        this.resetPassword = new _signup_form_viewmodels_passwordResetViewModel__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordViewModel"]();
        this.popupVisible = true;
    }
    onCancel() {
        this.popupVisible = false;
        this.formResetPassword = null;
        this.resetPassword = null;
    }
    onSendEmailCodeResetPassword() {
        this.isFormResetPasswordSubmitted = true;
        if (this.formResetPassword && this.formResetPassword.get('email').valid) {
            this.resetPassword.email = this.formResetPassword.get('email').value;
            this.isBusy = true;
            this.signUpService.sendCodeResetPassword(this.resetPassword)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                if (response) {
                    this.isFormResetPasswordSubmitted = false;
                    this.formResetPassword.get('email').disable();
                    this.formResetPassword.get('code').enable();
                }
                else {
                    this.formResetPassword.get('email').setErrors({ noExist: true }, { emitEvent: false });
                }
                this.isBusy = false;
            }, () => {
                this.isBusy = false;
                this.toastr.error('ERROR');
            });
        }
    }
    onCheckCodeResetPassword() {
        this.isFormResetPasswordSubmitted = true;
        if (this.formResetPassword && this.formResetPassword.get('code').valid) {
            this.resetPassword.code = this.formResetPassword.get('code').value;
            this.isBusy = true;
            this.signUpService.checkCodeResetPassword(this.resetPassword)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                if (response) {
                    this.isFormResetPasswordSubmitted = false;
                    this.formResetPassword.get('code').disable();
                    this.formResetPassword.get('newPassword').enable();
                }
                else {
                    this.formResetPassword.get('code').setErrors({ notValid: true }, { emitEvent: false });
                }
                this.isBusy = false;
            }, () => {
                this.isBusy = false;
                this.toastr.error('ERROR');
            });
        }
    }
    onResetPassword() {
        this.isFormResetPasswordSubmitted = true;
        if (this.formResetPassword && this.formResetPassword.get('newPassword').valid) {
            this.resetPassword.newPassword = this.formResetPassword.get('newPassword').value;
            this.isBusy = true;
            this.signUpService.resetPassword(this.resetPassword)
                .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                .subscribe((response) => {
                if (response) {
                    this.popupVisible = false;
                    this.toastr.success(this.translateService.instant('ProfileComponent.Message.PasswordSuccessfullyChanged'));
                    this.formResetPassword = null;
                    this.resetPassword = null;
                }
                else {
                    this.formResetPassword.get('newPassword').setErrors({ invalid: true });
                }
                this.isBusy = false;
            }, () => {
                this.isBusy = false;
                this.toastr.error('ERROR');
            });
        }
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.form.get('email').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe((value) => {
            if (!this.form.get('email').hasError('required') && !this.form.get('email').hasError('email')) {
                if (this.existsEmail$) {
                    this.existsEmail$.unsubscribe();
                }
                this.existsEmail$ = this.signUpService.emailExists(value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
                    .subscribe((response) => {
                    if (response) {
                        this.form.get('email').setErrors(null, { emitEvent: true });
                    }
                    else {
                        this.form.get('email').setErrors({ noExist: true }, { emitEvent: true });
                    }
                }, () => {
                });
            }
        });
    }
    saveFormValues() {
        const userLogin = new _viewmodels_userLoginViewModel__WEBPACK_IMPORTED_MODULE_6__["UserLoginViewModel"]();
        userLogin.email = this.form.controls.email.value;
        userLogin.password = this.form.controls.password.value;
        return userLogin;
    }
};
SignInFormComponent.ɵfac = function SignInFormComponent_Factory(t) { return new (t || SignInFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_10__["SignUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"])); };
SignInFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInFormComponent, selectors: [["app-signin-form"]], decls: 5, vars: 12, consts: [["class", "container-form", 4, "ngIf"], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "showCloseButton", "visible", "visibleChange", "onHidden"], ["class", "position-relative", 4, "dxTemplate", "dxTemplateOf"], ["type", "ball-clip-rotate-pulse"], [1, "container-form"], [1, "text-center"], [1, "row", 3, "formGroup"], [1, "col-12"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger mt-1 p-1", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], [1, "btn", "btn-primary", "col-12", 3, "click"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center", "pt-3"], [1, "btn", "p-0", 3, "click"], [1, "alert", "alert-danger", "mt-1", "p-1"], [1, "position-relative"], [4, "ngIf"], ["class", "w-100 d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "container-form-popup", 3, "formGroup"], ["direction", "vertical"], ["class", "row pt-2 m-0 mb-2 d-flex align-items-center", 4, "ngIf"], ["class", "row m-0 mb-2 d-flex align-items-center", 4, "ngIf"], [1, "row", "position-absolute", "m-0", "py-2", "popup-buttons"], ["class", "btn btn-primary w-100", 3, "click", 4, "ngIf"], [1, "row", "pt-2", "m-0", "mb-2", "d-flex", "align-items-center"], ["type", "text", "formControlName", "code", 1, "form-control", 3, "placeholder"], [1, "row", "m-0", "mb-2", "d-flex", "align-items-center"], ["type", "password", "formControlName", "newPassword", 1, "form-control", 3, "placeholder"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "sr-only"]], template: function SignInFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SignInFormComponent_div_0_Template, 30, 26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-popup", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function SignInFormComponent_Template_dx_popup_visibleChange_1_listener($event) { return ctx.popupVisible = $event; })("onHidden", function SignInFormComponent_Template_dx_popup_onHidden_1_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignInFormComponent_div_3_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-spinner", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 10, "SignInSignUpComponent.Label.ResetYourPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 500)("height", 230)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("showCloseButton", true)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxPopupComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_16__["DxTemplateDirective"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], devextreme_angular__WEBPACK_IMPORTED_MODULE_15__["DxScrollViewComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".container-form[_ngcontent-%COMP%] {\n  padding-left: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduaW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic2lnbmluLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG59XG4iXX0= */"] });
SignInFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], SignInFormComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignInFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-signin-form',
                templateUrl: './signin-form.component.html',
                styleUrls: ['./signin-form.component.scss']
            }]
    }], function () { return [{ type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _signup_form_services_signup_service__WEBPACK_IMPORTED_MODULE_10__["SignUpService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "y8gV":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _credentials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credentials.service */ "DR2l");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "cplz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthenticationService {
    constructor(credentialsService, dataService, http) {
        this.credentialsService = credentialsService;
        this.dataService = dataService;
        this.http = http;
        this.url = 'User';
    }
    /**
     * Authenticates the user.
     * @param context The login parameters.
     * @return The user credentials.
     */
    login(context) {
        const body = JSON.stringify(context);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.http.post(this.url + '/authenticate', body).subscribe(credentials => {
                this.data = credentials;
                this.credentialsService.setCredentials(this.data);
                this.dataService.loadCurrentUser()
                    .subscribe(() => {
                    observer.next(credentials);
                }, () => {
                    observer.next(credentials);
                });
            }, error => {
                observer.error(error);
            });
        });
    }
    changePassword(changePassword) {
        const body = JSON.stringify(changePassword);
        return this.http.put(this.url + '/changePassword', body);
    }
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    logout() {
        // Customize credentials invalidation here
        this.credentialsService.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yhB2":
/*!******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.ts ***!
  \******************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_baseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseComponent */ "Vy8h");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "active": a0 }; };
let MaintenanceComponent = class MaintenanceComponent extends _shared_baseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(router, route) {
        super();
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.router.navigate(['users'], { relativeTo: this.route });
    }
    onOpenPage(opt) {
        switch (opt) {
            case 'users':
                this.router.navigate(['users'], { relativeTo: this.route });
                break;
            case 'projects':
                this.router.navigate(['projects'], { relativeTo: this.route });
                break;
            case 'languages':
                this.router.navigate(['languages'], { relativeTo: this.route });
                break;
            case 'downloadsettings':
                this.router.navigate(['downloadsettings'], { relativeTo: this.route });
                break;
            default:
                break;
        }
    }
};
MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
MaintenanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 16, consts: [[1, "container-maintenance"], [1, "row", "m-0", "p-2"], ["role", "group", 1, "btn-group", "ml-auto"], ["type", "button", 1, "btn", "btn-secondary", 3, "ngClass", "click"], [1, "container-maintenance-body", "pl-2", "pb-2"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceComponent_Template_button_click_3_listener() { return ctx.onOpenPage("users"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceComponent_Template_button_click_5_listener() { return ctx.onOpenPage("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceComponent_Template_button_click_7_listener() { return ctx.onOpenPage("languages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MaintenanceComponent_Template_button_click_9_listener() { return ctx.onOpenPage("downloadsettings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.router.url.includes("maintenance/users")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Users", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.router.url.includes("maintenance/projects")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Projects", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.router.url.includes("maintenance/languages")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Languages", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.router.url.includes("maintenance/downloadsettings")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "Download Settings", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".container-maintenance[_ngcontent-%COMP%] {\n  height: calc(100vh - 110px);\n  overflow-y: hidden;\n}\n.container-maintenance[_ngcontent-%COMP%]   .container-maintenance-body[_ngcontent-%COMP%] {\n  height: calc(100% - 54px);\n  padding-right: 3px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJtYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbWFpbnRlbmFuY2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAuY29udGFpbmVyLW1haW50ZW5hbmNlLWJvZHkge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTRweCk7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW4sXG4gIH1cbn1cbiJdfQ== */"] });
MaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], MaintenanceComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaintenanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-maintenance',
                templateUrl: './maintenance.component.html',
                styleUrls: ['./maintenance.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map