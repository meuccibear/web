(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_components_form_index_module_ts"],{

/***/ 24166:
/*!****************************************************!*\
  !*** ./src/app/components/form/advanced-search.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormAdvancedSearchComponent": () => (/* binding */ NzDemoFormAdvancedSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);











function NzDemoFormAdvancedSearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8)("hidden", !control_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFor", "field" + control_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Field ", control_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "field" + control_r1.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "field" + control_r1.index);
} }
class NzDemoFormAdvancedSearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.controlArray = [];
        this.isCollapse = true;
    }
    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
        this.controlArray.forEach((c, index) => {
            c.show = this.isCollapse ? index < 6 : true;
        });
    }
    resetForm() {
        this.validateForm.reset();
    }
    ngOnInit() {
        this.validateForm = this.fb.group({});
        for (let i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl(`field${i}`, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
        }
    }
}
NzDemoFormAdvancedSearchComponent.ɵfac = function NzDemoFormAdvancedSearchComponent_Factory(t) { return new (t || NzDemoFormAdvancedSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormAdvancedSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormAdvancedSearchComponent, selectors: [["nz-demo-form-advanced-search"]], decls: 14, vars: 6, consts: [["nz-form", "", 1, "ant-advanced-search-form", 3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "hidden", 4, "ngFor", "ngForOf"], ["nz-row", ""], ["nz-col", "", 1, "search-area", 3, "nzSpan"], ["nz-button", "", 3, "nzType"], ["nz-button", "", 3, "click"], [1, "collapse", 3, "click"], ["nz-icon", "", 3, "nzType"], [1, "search-result-list"], ["nz-col", "", 3, "nzSpan", "hidden"], ["nzFlex", ""], [3, "nzFor"], ["nz-input", "", "placeholder", "placeholder", 3, "formControlName"]], template: function NzDemoFormAdvancedSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoFormAdvancedSearchComponent_div_2_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormAdvancedSearchComponent_Template_button_click_7_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormAdvancedSearchComponent_Template_a_click_9_listener() { return ctx.toggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Collapse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Search Result List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controlArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isCollapse ? "down" : "up");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".ant-advanced-search-form[_ngcontent-%COMP%] {\n        padding: 24px;\n        background: #fbfbfb;\n        border: 1px solid #d9d9d9;\n        border-radius: 6px;\n      }\n\n      .search-result-list[_ngcontent-%COMP%] {\n        margin-top: 16px;\n        border: 1px dashed #e9e9e9;\n        border-radius: 6px;\n        background-color: #fafafa;\n        min-height: 200px;\n        text-align: center;\n        padding-top: 80px;\n      }\n\n      [nz-form-label][_ngcontent-%COMP%] {\n        overflow: visible;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-left: 8px;\n      }\n\n      .collapse[_ngcontent-%COMP%] {\n        margin-left: 8px;\n        font-size: 12px;\n      }\n\n      .search-area[_ngcontent-%COMP%] {\n        text-align: right;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxpQkFBaUI7TUFDbkI7O01BRUE7UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLGlCQUFpQjtNQUNuQiIsImZpbGUiOiJhZHZhbmNlZC1zZWFyY2gudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5hbnQtYWR2YW5jZWQtc2VhcmNoLWZvcm0ge1xuICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtcmVzdWx0LWxpc3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgIH1cblxuICAgICAgW256LWZvcm0tbGFiZWxdIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb2xsYXBzZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1hcmVhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 97240:
/*!**********************************************!*\
  !*** ./src/app/components/form/auto-tips.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormAutoTipsComponent": () => (/* binding */ NzDemoFormAutoTipsComponent),
/* harmony export */   "MyValidators": () => (/* binding */ MyValidators)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);











function NzDemoFormAutoTipsComponent_ng_template_26_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormAutoTipsComponent_ng_template_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormAutoTipsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormAutoTipsComponent_ng_template_26_ng_container_0_Template, 2, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormAutoTipsComponent_ng_template_26_ng_container_1_Template, 2, 0, "ng-container", 14);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r2.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r2.hasError("confirm"));
} }
class NzDemoFormAutoTipsComponent {
    constructor(fb) {
        this.fb = fb;
        // current locale is key of the nzAutoTips
        this.autoTips = {
            'zh-cn': {
                required: '必填项',
                email: '邮箱格式不正确'
            },
            en: {
                required: 'Input is required',
                email: 'The input is not valid email'
            }
        };
        this.userNameAsyncValidator = (control) => new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    observer.next({
                        duplicated: { 'zh-cn': `用户名已存在`, en: `The username is redundant!` }
                    });
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });
        this.confirmValidator = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        // use `MyValidators`
        const { required, maxLength, minLength, email, mobile } = MyValidators;
        this.validateForm = this.fb.group({
            userName: ['', [required, maxLength(12), minLength(6)], [this.userNameAsyncValidator]],
            mobile: ['', [required, mobile]],
            email: ['', [required, email]],
            password: ['', [required]],
            confirm: ['', [this.confirmValidator]]
        });
    }
    submitForm(value) {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }
    validateConfirmPassword() {
        setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
    }
}
NzDemoFormAutoTipsComponent.ɵfac = function NzDemoFormAutoTipsComponent_Factory(t) { return new (t || NzDemoFormAutoTipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
NzDemoFormAutoTipsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormAutoTipsComponent, selectors: [["nz-demo-form-auto-tips"]], decls: 32, vars: 17, consts: [["nz-form", "", 3, "nzAutoTips", "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSpan"], ["nzValidatingTip", "Validating...", 3, "nzSpan"], ["nz-input", "", "formControlName", "userName", "placeholder", "async validate try to write JasonWood"], [3, "nzSpan"], ["nz-input", "", "formControlName", "mobile", "placeholder", "mobile"], ["nz-input", "", "formControlName", "email", "placeholder", "email", "type", "email"], ["nzErrorTip", "Please input your password!", 3, "nzSpan", "nzDisableAutoTips"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "ngModelChange"], [3, "nzSpan", "nzDisableAutoTips", "nzErrorTip"], ["nz-input", "", "type", "password", "formControlName", "confirm", "placeholder", "confirm your password"], ["passwordErrorTpl", ""], [3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary"], [4, "ngIf"]], template: function NzDemoFormAutoTipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NzDemoFormAutoTipsComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(ctx.validateForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoFormAutoTipsComponent_Template_input_ngModelChange_20_listener() { return ctx.validateConfirmPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NzDemoFormAutoTipsComponent_ng_template_26_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutoTips", ctx.autoTips)("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzDisableAutoTips", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzDisableAutoTips", true)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffset", 7)("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG8tdGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoiYXV0by10aXBzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotZm9ybV0ge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });
class MyValidators extends _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators {
    static minLength(minLength) {
        return (control) => {
            if (_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(minLength)(control) === null) {
                return null;
            }
            return { minlength: { 'zh-cn': `最小长度为 ${minLength}`, en: `MinLength is ${minLength}` } };
        };
    }
    static maxLength(maxLength) {
        return (control) => {
            if (_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(maxLength)(control) === null) {
                return null;
            }
            return { maxlength: { 'zh-cn': `最大长度为 ${maxLength}`, en: `MaxLength is ${maxLength}` } };
        };
    }
    static mobile(control) {
        const value = control.value;
        if (isEmptyInputValue(value)) {
            return null;
        }
        return isMobile(value) ? null : { mobile: { 'zh-cn': `手机号码格式不正确`, en: `Mobile phone number is not valid` } };
    }
}
function isEmptyInputValue(value) {
    return value == null || value.length === 0;
}
function isMobile(value) {
    return typeof value === 'string' && /(^1\d{10}$)/.test(value);
}


/***/ }),

/***/ 60156:
/*!************************************************!*\
  !*** ./src/app/components/form/coordinated.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormCoordinatedComponent": () => (/* binding */ NzDemoFormCoordinatedComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ 80269);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);










class NzDemoFormCoordinatedComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    genderChange(value) {
        this.validateForm.get('note').setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            note: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
        });
    }
}
NzDemoFormCoordinatedComponent.ɵfac = function NzDemoFormCoordinatedComponent_Factory(t) { return new (t || NzDemoFormCoordinatedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormCoordinatedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoFormCoordinatedComponent, selectors: [["nz-demo-form-coordinated"]], decls: 17, vars: 7, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "note", 3, "nzSpan"], ["nzErrorTip", "Please input your username!", 3, "nzSpan"], ["id", "note", "type", "text", "nz-input", "", "formControlName", "note"], ["nzFor", "gender", "nzRequired", "", 3, "nzSpan"], ["nzErrorTip", "Please select your gender!", 3, "nzSpan"], ["id", "gender", "formControlName", "gender", "nzPlaceHolder", "Select a option and change input text above", 3, "ngModelChange"], ["nzValue", "male", "nzLabel", "male"], ["nzValue", "female", "nzLabel", "female"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormCoordinatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormCoordinatedComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzDemoFormCoordinatedComponent_Template_nz_select_ngModelChange_10_listener($event) { return ctx.genderChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12)("nzOffset", 5);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb3JkaW5hdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQiIsImZpbGUiOiJjb29yZGluYXRlZC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 17695:
/*!******************************************************!*\
  !*** ./src/app/components/form/dynamic-form-item.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormDynamicFormItemComponent": () => (/* binding */ NzDemoFormDynamicFormItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);











function NzDemoFormDynamicFormItemComponent_nz_form_item_1_nz_form_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passengers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 4)("nzFor", control_r1.controlInstance);
} }
function NzDemoFormDynamicFormItemComponent_nz_form_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormDynamicFormItemComponent_nz_form_item_1_nz_form_label_1_Template, 2, 3, "nz-form-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-control", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormDynamicFormItemComponent_nz_form_item_1_Template_i_click_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const control_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeField(control_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24)("nzSm", 20)("nzOffset", i_r2 == 0 ? 0 : 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", control_r1.controlInstance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", control_r1.id);
} }
const _c0 = function () { return { span: 24, offset: 0 }; };
const _c1 = function () { return { span: 20, offset: 4 }; };
class NzDemoFormDynamicFormItemComponent {
    constructor(fb) {
        this.fb = fb;
        this.listOfControl = [];
    }
    addField(e) {
        if (e) {
            e.preventDefault();
        }
        const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
        const control = {
            id,
            controlInstance: `passenger${id}`
        };
        const index = this.listOfControl.push(control);
        console.log(this.listOfControl[this.listOfControl.length - 1]);
        this.validateForm.addControl(this.listOfControl[index - 1].controlInstance, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required));
    }
    removeField(i, e) {
        e.preventDefault();
        if (this.listOfControl.length > 1) {
            const index = this.listOfControl.indexOf(i);
            this.listOfControl.splice(index, 1);
            console.log(this.listOfControl);
            this.validateForm.removeControl(i.controlInstance);
        }
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        console.log(this.validateForm.value);
    }
    ngOnInit() {
        this.validateForm = this.fb.group({});
        this.addField();
    }
}
NzDemoFormDynamicFormItemComponent.ɵfac = function NzDemoFormDynamicFormItemComponent_Factory(t) { return new (t || NzDemoFormDynamicFormItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormDynamicFormItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormDynamicFormItemComponent, selectors: [["nz-demo-form-dynamic-form-item"]], decls: 11, vars: 10, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], [3, "nzXs", "nzSm"], ["nz-button", "", "nzType", "dashed", 1, "add-button", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "primary"], [3, "nzXs", "nzSm", "nzFor", 4, "ngIf"], ["nzErrorTip", "Please input passenger's name or delete this field.", 3, "nzXs", "nzSm", "nzOffset"], ["nz-input", "", "placeholder", "placeholder", 1, "passenger-input", 3, "formControlName"], ["nz-icon", "", "nzType", "minus-circle-o", 1, "dynamic-delete-button", 3, "click"], [3, "nzXs", "nzSm", "nzFor"]], template: function NzDemoFormDynamicFormItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NzDemoFormDynamicFormItemComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormDynamicFormItemComponent_nz_form_item_1_Template, 5, 6, "nz-form-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormDynamicFormItemComponent_Template_button_click_4_listener($event) { return ctx.addField($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add field ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent], styles: [".dynamic-delete-button[_ngcontent-%COMP%] {\n        cursor: pointer;\n        position: relative;\n        top: 4px;\n        font-size: 24px;\n        color: #999;\n        transition: all 0.3s;\n      }\n\n      .dynamic-delete-button[_ngcontent-%COMP%]:hover {\n        color: #777;\n      }\n\n      .passenger-input[_ngcontent-%COMP%] {\n        width: 60%;\n        margin-right: 8px;\n      }\n\n      [nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      .add-button[_ngcontent-%COMP%] {\n        width: 60%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZm9ybS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGVBQWU7UUFDZixXQUFXO1FBQ1gsb0JBQW9CO01BQ3RCOztNQUVBO1FBQ0UsV0FBVztNQUNiOztNQUVBO1FBQ0UsVUFBVTtRQUNWLGlCQUFpQjtNQUNuQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLFVBQVU7TUFDWiIsImZpbGUiOiJkeW5hbWljLWZvcm0taXRlbS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmR5bmFtaWMtZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5keW5hbWljLWRlbGV0ZS1idXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgIH1cblxuICAgICAgLnBhc3Nlbmdlci1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICBbbnotZm9ybV0ge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 44624:
/*!*************************************************!*\
  !*** ./src/app/components/form/dynamic-rule.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormDynamicRuleComponent": () => (/* binding */ NzDemoFormDynamicRuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);










class NzDemoFormDynamicRuleComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    requiredChange(required) {
        if (!required) {
            this.validateForm.get('nickname').clearValidators();
            this.validateForm.get('nickname').markAsPristine();
        }
        else {
            this.validateForm.get('nickname').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
            this.validateForm.get('nickname').markAsDirty();
        }
        this.validateForm.get('nickname').updateValueAndValidity();
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            nickname: [null],
            required: [false]
        });
    }
}
NzDemoFormDynamicRuleComponent.ɵfac = function NzDemoFormDynamicRuleComponent_Factory(t) { return new (t || NzDemoFormDynamicRuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormDynamicRuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoFormDynamicRuleComponent, selectors: [["nz-demo-form-dynamic-rule"]], decls: 19, vars: 10, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "name", 3, "nzSpan"], ["nzErrorTip", "Please input your name", 3, "nzSpan"], ["type", "text", "nz-input", "", "formControlName", "name", "placeholder", "Please input your name"], ["nzFor", "nickname", 3, "nzSpan", "nzRequired"], ["nzErrorTip", "Please input your nickname", 3, "nzSpan"], ["type", "text", "nz-input", "", "formControlName", "nickname", "placeholder", "Please input your nickname"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "required", 3, "ngModelChange"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormDynamicRuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormDynamicRuleComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzDemoFormDynamicRuleComponent_Template_label_ngModelChange_13_listener($event) { return ctx.requiredChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Nickname is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4)("nzRequired", (tmp_4_0 = ctx.validateForm.get("required")) == null ? null : tmp_4_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8)("nzOffset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8)("nzOffset", 4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__.NzCheckboxComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });


/***/ }),

/***/ 83973:
/*!*************************************************!*\
  !*** ./src/app/components/form/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormEnComponent": () => (/* binding */ NzDemoFormEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/affix */ 36175);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 58925);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 47420);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-login */ 84312);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-login */ 81695);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ 63623);
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-search */ 24166);
/* harmony import */ var _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-item */ 17695);
/* harmony import */ var _time_related_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-related-controls */ 21904);
/* harmony import */ var _validate_reactive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate-reactive */ 73315);
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validate-template */ 96543);
/* harmony import */ var _auto_tips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auto-tips */ 97240);
/* harmony import */ var _validate_static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate-static */ 34166);
/* harmony import */ var _coordinated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coordinated */ 60156);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout */ 33185);
/* harmony import */ var _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamic-rule */ 44624);






















class NzDemoFormEnComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoFormEnComponent.ɵfac = function NzDemoFormEnComponent_Factory(t) { return new (t || NzDemoFormEnComponent)(); };
NzDemoFormEnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: NzDemoFormEnComponent, selectors: [["nz-demo-form"]], viewQuery: function NzDemoFormEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 919, vars: 43, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-form-demo-horizontal-login", "nzTitle", "Inline Login Form"], ["nzHref", "#components-form-demo-normal-login", "nzTitle", "Login Form"], ["nzHref", "#components-form-demo-register", "nzTitle", "Registration"], ["nzHref", "#components-form-demo-advanced-search", "nzTitle", "Advanced search"], ["nzHref", "#components-form-demo-dynamic-form-item", "nzTitle", "Dynamic Form Item"], ["nzHref", "#components-form-demo-time-related-controls", "nzTitle", "Time-related Controls"], ["nzHref", "#components-form-demo-validate-reactive", "nzTitle", "Reactive Forms Validation"], ["nzHref", "#components-form-demo-validate-template", "nzTitle", "Template-driven Forms Validation"], ["nzHref", "#components-form-demo-auto-tips", "nzTitle", "Auto tips"], ["nzHref", "#components-form-demo-validate-static", "nzTitle", "Manual Set Validation Status"], ["nzHref", "#components-form-demo-coordinated", "nzTitle", "Coordinated Controls"], ["nzHref", "#components-form-demo-layout", "nzTitle", "Form Layout"], ["nzHref", "#components-form-demo-dynamic-rule", "nzTitle", "Dynamic Rules"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["href", "https://angular.io/guide/forms#forms"], ["href", "https://angular.io/guide/reactive-forms#reactive-forms"], ["href", "https://angular.io/guide/forms#template-driven-forms"], ["id", "form"], ["onclick", "window.location.hash = 'form'", 1, "anchor"], ["id", "nz-form-item"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-form-item'", 1, "anchor"], ["id", "nz-form-label"], ["onclick", "window.location.hash = 'nz-form-label'", 1, "anchor"], ["id", "nz-form-control"], ["onclick", "window.location.hash = 'nz-form-control'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "punctuation"], [1, "token", "attr-name"], [1, "token", "attr-value"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Inline Login Form", "nzSelector", "nz-demo-form-horizontal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-horizontal-login <name>", "nzComponentName", "NzDemoFormHorizontalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Login Form", "nzSelector", "nz-demo-form-normal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-normal-login <name>", "nzComponentName", "NzDemoFormNormalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Registration", "nzSelector", "nz-demo-form-register", "nzGenerateCommand", "ng g ng-zorro-antd:form-register <name>", "nzComponentName", "NzDemoFormRegisterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Advanced search", "nzSelector", "nz-demo-form-advanced-search", "nzGenerateCommand", "ng g ng-zorro-antd:form-advanced-search <name>", "nzComponentName", "NzDemoFormAdvancedSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dynamic Form Item", "nzSelector", "nz-demo-form-dynamic-form-item", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-form-item <name>", "nzComponentName", "NzDemoFormDynamicFormItemComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Time-related Controls", "nzSelector", "nz-demo-form-time-related-controls", "nzGenerateCommand", "ng g ng-zorro-antd:form-time-related-controls <name>", "nzComponentName", "NzDemoFormTimeRelatedControlsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://date-fns.org/"], ["nzTitle", "Reactive Forms Validation", "nzSelector", "nz-demo-form-validate-reactive", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-reactive <name>", "nzComponentName", "NzDemoFormValidateReactiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/guide/template-syntax"], ["nzTitle", "Template-driven Forms Validation", "nzSelector", "nz-demo-form-validate-template", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-template <name>", "nzComponentName", "NzDemoFormValidateTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Auto tips", "nzSelector", "nz-demo-form-auto-tips", "nzGenerateCommand", "ng g ng-zorro-antd:form-auto-tips <name>", "nzComponentName", "NzDemoFormAutoTipsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Manual Set Validation Status", "nzSelector", "nz-demo-form-validate-static", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-static <name>", "nzComponentName", "NzDemoFormValidateStaticComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Coordinated Controls", "nzSelector", "nz-demo-form-coordinated", "nzGenerateCommand", "ng g ng-zorro-antd:form-coordinated <name>", "nzComponentName", "NzDemoFormCoordinatedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Form Layout", "nzSelector", "nz-demo-form-layout", "nzGenerateCommand", "ng g ng-zorro-antd:form-layout <name>", "nzComponentName", "NzDemoFormLayoutComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Dynamic Rules", "nzSelector", "nz-demo-form-dynamic-rule", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-rule <name>", "nzComponentName", "NzDemoFormDynamicRuleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-form]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-form]'", 1, "anchor"], ["href", "/components/grid/zh"], ["href", "https://github.com/angular/angular/issues/10887"], ["id", "nz-form-split"], ["onclick", "window.location.hash = 'nz-form-split'", 1, "anchor"], ["id", "nz-form-text"], ["onclick", "window.location.hash = 'nz-form-text'", 1, "anchor"]], template: function NzDemoFormEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzClick", function NzDemoFormEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Form is totally based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "Angular Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, ", you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "reactive forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "template-driven-forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Please make sure you have read the official form document before using the component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "You can align the controls of a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, " using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, "layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, " prop\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "\uFF1Ato horizontally align the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "s and controls of the fields. (Default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "\uFF1Ato vertically align the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "s and controls of the fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "\uFF1Ato render form fields in one line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "Used to separate the item in forms, contains label(optional) and control field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](84, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](88, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, "The label of the form item, optional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](95, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, "A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "pre", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](105, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](107, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109, "nz-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](112, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](117, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](118, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](124, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](128, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](133, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](135, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](136, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](139, "nzFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](140, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](145, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](147, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](149, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](152, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](154, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](155, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](157, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](158, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](160, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](161, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](162, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](163, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](164, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](165, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](166, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](168, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](169, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](171, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](172, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](174, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](175, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](176, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](177, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](178, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](179, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](181, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](183, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](184, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185, "nz-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](186, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](187, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](188, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](189, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](191, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](193, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](194, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](195, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](196, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](197, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](198, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](199, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](200, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](201, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](202, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](203, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](204, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](205, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](206, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](207, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](208, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](209, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](210, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](211, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](212, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](213, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](214, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](215, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](216, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](217, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](218, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](220, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](221, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](222, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](223, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](224, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](226, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](227, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](228, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](229, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](230, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](231, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](232, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](233, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](234, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](235, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](236, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](237, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](238, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](239, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](240, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](241, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](242, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](243, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](244, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](245, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](246, "pre", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](248, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](249, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](250, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](251, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](252, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](253, " NzFormModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](254, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](255, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](256, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](258, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](259, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](260, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](261, "'ng-zorro-antd/form'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](262, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](263, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](264, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](265, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](266, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function NzDemoFormEnComponent_Template_i_click_267_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](268, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](269, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](270, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](271, "nz-demo-form-horizontal-login", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](273, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](274, "Inline login form is often used in navigation bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](275, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](276, "nz-demo-form-normal-login", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](279, "Normal login form which can contain more elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](280, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](281, "nz-demo-form-register", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](282, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](283, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](284, "Fill in this form to create a new account for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](285, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](286, "nz-demo-form-advanced-search", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](287, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](289, "Three columns layout is often used for advanced searching of data table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](291, "Because the width of label is not fixed, you may need to adjust it by customizing its style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](292, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](293, "nz-demo-form-dynamic-form-item", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](294, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](295, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](296, "Add or remove form items dynamically.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](297, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](298, "nz-demo-form-time-related-controls", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](299, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](301, "All the types of input and output in time-related components are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](303, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](304, ". You can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](305, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](306, "date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](307, " to handle it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](308, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](309, "nz-demo-form-validate-reactive", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](310, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](312, "We provide properties like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](314, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](316, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](317, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](319, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](320, " to customize your own validate status and message, when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](321, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](322, "reactive forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](323, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](324, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](325, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](327, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](328, ": validate status of form components, the default status comes from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](330, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](331, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](333, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](334, ", you can set other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](336, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](337, " to it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](338, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](340, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](341, ": display feed icon of input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](342, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](344, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](346, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](348, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](350, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](351, "\uFF1Adisplay validate message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](352, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](354, "When there are multiple tips in the same state, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](356, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](358, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](360, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](362, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](363, " supports the passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](364, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](365, "TemplateRef<{ $implicit: FormControl }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](366, " type, which can be used to switch tips after exporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](368, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](369, " via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](370, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](371, "template syntax");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](372, ". When the FormControl.status is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](374, "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](375, ", and the errors contains ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](377, "{warning:true}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](378, " , the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](380, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](381, " display with warning status.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](382, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](383, "nz-demo-form-validate-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](384, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](385, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](386, "When using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](387, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](388, "template-driven forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](389, ", the form could change its status via the template setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](390, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](391, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](393, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](394, ": display feed icon of input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](395, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](397, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](399, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](401, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](403, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](404, "\uFF1Adisplay validate message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](405, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](406, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](407, "When there are multiple tips in the same state, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](409, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](410, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](411, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](413, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](415, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](416, " supports the passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](418, "TemplateRef<{ $implicit: NgModel }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](419, " type, which can be used to switch tips after exporting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](421, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](422, " via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](423, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](424, "template syntax");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](425, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](426, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](427, "nz-demo-form-auto-tips", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](428, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](429, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](430, "Make tips to be easy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](431, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](432, "Need to customize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](434, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](435, " and provide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](437, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](438, " in advance, the priority is as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](439, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](440, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](442, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](443, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](445, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](446, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](447, "Via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](449, "@Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](450, " set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](451, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](452, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](453, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](454, "Via global config set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](456, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](457, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](458, "In addition, you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](459, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](460, "nzDisableAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](461, " to disable it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](462, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](463, "nz-demo-form-validate-static", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](464, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](465, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](466, "You can set the form status directly via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](468, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](469, " on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](471, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](472, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](473, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](474, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](476, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](477, ": validate status of form components which could be 'success', 'warning', 'error', 'validating'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](478, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](480, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](481, ": display feed icon of input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](482, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](483, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](484, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](486, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](488, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](490, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](491, "\uFF1Adisplay validate message\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](492, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](493, "nz-demo-form-coordinated", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](494, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](495, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](496, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](498, "setValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](499, " to set other control's value programmaticly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](500, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](501, "nz-demo-form-layout", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](502, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](503, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](504, "There are three layout for form: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](505, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](506, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](507, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](509, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](510, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](512, "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](513, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](514, "nz-code-box", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](515, "nz-demo-form-dynamic-rule", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](516, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](517, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](518, "Perform different check rules according to different situations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](519, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](520, "h2", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](521, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](522, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](523, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](524, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](525, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](526, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](527, "[nz-form]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](528, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](529, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](530, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](531, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](532, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](533, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](534, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](535, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](536, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](537, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](538, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](539, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](540, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](541, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](542, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](543, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](544, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](545, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](546, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](547, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](549, "[nzLayout]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](551, "Form layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](553, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](554, "'horizontal' | 'vertical' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](557, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](559, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](560, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](562, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](564, "change default props ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](565, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](566, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](567, " value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](568, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](569, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](571, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](572, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](573, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](574, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](575, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](577, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](578, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](579, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](581, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](583, "Set default props ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](584, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](585, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](586, " value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](587, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](588, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](589, ", please refer to the example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](590, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](591, "Auto tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](592, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](593, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](594, "Record<string, Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](595, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](597, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](599, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](600, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](602, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](603, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](605, "Set default props ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](606, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](607, "[nzDisableAutoTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](608, " value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](609, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](610, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](612, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](613, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](614, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](615, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](616, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](618, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](619, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](620, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](621, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](622, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](623, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](624, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](625, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](626, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](627, "Used to separate the item in forms, contains label(optional) and control field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](628, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](629, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](630, "All api in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](631, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](632, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](633, " can be used in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](634, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](635, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](636, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](637, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](638, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](639, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](640, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](641, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](642, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](643, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](644, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](645, "The label of the form item, optional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](646, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](647, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](648, "All api in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](649, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](650, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](651, " can be used in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](652, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](653, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](654, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](655, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](656, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](657, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](658, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](659, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](660, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](661, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](662, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](663, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](664, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](665, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](666, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](667, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](670, "[nzRequired]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](672, "add required style to current item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](675, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](677, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](678, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](679, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](680, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](681, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](682, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](683, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](684, "whether to not display ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](686, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](687, " after label text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](690, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](691, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](692, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](693, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](694, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](695, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](696, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](697, "[nzFor]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](699, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](700, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](701, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](702, " property of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](704, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](706, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](707, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](709, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](710, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](711, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](712, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](713, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](714, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](715, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](716, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](717, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](718, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](719, "Note\uFF1ADue to the lack of partial Observable in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](720, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](721, "Angular Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](722, ", you have to notify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](723, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](724, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](725, " to update its status with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](726, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](727, "updateValueAndValidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](728, " when you update form status using methods like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](730, "markAsDirty");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](731, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](732, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](733, "A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](734, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](735, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](736, "All api in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](737, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](738, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](739, " can be used in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](741, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](742, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](743, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](744, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](745, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](746, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](747, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](748, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](749, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](750, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](751, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](752, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](753, "Default Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](754, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](755, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](756, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](759, "[nzValidateStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](761, "Will generate status based on the input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](762, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](763, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](764, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](766, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](767, " or string, the default value is the first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](768, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](769, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](770, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](771, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](772, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](773, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](774, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](775, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](776, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](777, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](778, "'success' | 'warning' | 'error' | 'validating' | FormControl | NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](780, "first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](781, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](782, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](783, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](784, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](785, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](786, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](787, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](788, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](789, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](790, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](792, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](793, "[nzHasFeedback]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](794, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](795, "Used with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](796, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](797, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](798, ", this option specifies the validation status icon. Recommended to be used only with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](799, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](800, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](801, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](802, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](803, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](804, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](806, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](807, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](809, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](810, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](811, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](812, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](814, "The extra prompt message");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](815, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](816, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](817, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](818, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](819, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](820, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](821, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](823, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](824, "[nzSuccessTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](825, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](826, "Tip display when validate success");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](827, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](828, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](829, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](831, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](832, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](833, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](834, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](835, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](836, "[nzWarningTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](837, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](838, "Tip display when validate warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](840, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](841, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](842, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](843, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](845, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](846, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](847, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](848, "[nzErrorTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](849, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](850, "Tip display when validate error");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](851, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](852, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](853, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](854, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](855, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](857, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](858, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](859, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](860, "[nzValidatingTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](861, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](862, "Tip display when validating");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](863, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](864, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](865, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](866, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](867, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](868, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](869, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](870, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](871, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](872, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](874, "The object of the tips, please refer to the example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](875, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](876, "Auto tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](877, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](878, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](879, "Record<string, string | Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](880, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](881, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](883, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](884, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](885, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](886, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](887, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](888, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](889, "Disable Auto Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](891, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](892, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](894, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](896, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](897, "h3", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](898, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](899, "nz-form-split");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](900, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](901, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](902, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](903, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](904, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](905, "The split icon of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](906, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](907, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](908, "h3", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](909, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](910, "nz-form-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](911, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](912, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](913, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](914, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](915, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](916, "Text in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](917, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](918, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](266);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-horizontal-login")("nzLink", "components-form-demo-horizontal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/horizontal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-normal-login")("nzLink", "components-form-demo-normal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/normal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-register")("nzLink", "components-form-demo-register")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/register.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-advanced-search")("nzLink", "components-form-demo-advanced-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/advanced-search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-dynamic-form-item")("nzLink", "components-form-demo-dynamic-form-item")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-form-item.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-time-related-controls")("nzLink", "components-form-demo-time-related-controls")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/time-related-controls.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-validate-reactive")("nzLink", "components-form-demo-validate-reactive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-reactive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-validate-template")("nzLink", "components-form-demo-validate-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-auto-tips")("nzLink", "components-form-demo-auto-tips")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/auto-tips.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-validate-static")("nzLink", "components-form-demo-validate-static")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-static.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-coordinated")("nzLink", "components-form-demo-coordinated")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/coordinated.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-layout")("nzLink", "components-form-demo-layout")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/layout.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-dynamic-rule")("nzLink", "components-form-demo-dynamic-rule")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-rule.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal_login__WEBPACK_IMPORTED_MODULE_1__.NzDemoFormHorizontalLoginComponent, _normal_login__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormNormalLoginComponent, _register__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormRegisterComponent, _advanced_search__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormAdvancedSearchComponent, _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormDynamicFormItemComponent, _time_related_controls__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormTimeRelatedControlsComponent, _validate_reactive__WEBPACK_IMPORTED_MODULE_7__.NzDemoFormValidateReactiveComponent, _validate_template__WEBPACK_IMPORTED_MODULE_8__.NzDemoFormValidateTemplateComponent, _auto_tips__WEBPACK_IMPORTED_MODULE_9__.NzDemoFormAutoTipsComponent, _validate_static__WEBPACK_IMPORTED_MODULE_10__.NzDemoFormValidateStaticComponent, _coordinated__WEBPACK_IMPORTED_MODULE_11__.NzDemoFormCoordinatedComponent, _layout__WEBPACK_IMPORTED_MODULE_12__.NzDemoFormLayoutComponent, _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__.NzDemoFormDynamicRuleComponent], encapsulation: 2 });


/***/ }),

/***/ 84312:
/*!*****************************************************!*\
  !*** ./src/app/components/form/horizontal-login.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormHorizontalLoginComponent": () => (/* binding */ NzDemoFormHorizontalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);









class NzDemoFormHorizontalLoginComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            remember: [true]
        });
    }
}
NzDemoFormHorizontalLoginComponent.ɵfac = function NzDemoFormHorizontalLoginComponent_Factory(t) { return new (t || NzDemoFormHorizontalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormHorizontalLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoFormHorizontalLoginComponent, selectors: [["nz-demo-form-horizontal-login"]], decls: 13, vars: 3, consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user"], ["formControlName", "userName", "nz-input", "", "placeholder", "Username"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["formControlName", "password", "nz-input", "", "type", "password", "placeholder", "Password"], ["nz-button", "", "nzType", "primary", 3, "disabled"]], template: function NzDemoFormHorizontalLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormHorizontalLoginComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-input-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLayout", "inline")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.validateForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective], encapsulation: 2 });


/***/ }),

/***/ 58014:
/*!*************************************************!*\
  !*** ./src/app/components/form/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormModule": () => (/* binding */ NzDemoFormModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 82432);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 9547);
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-search */ 24166);
/* harmony import */ var _auto_tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-tips */ 97240);
/* harmony import */ var _coordinated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinated */ 60156);
/* harmony import */ var _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-item */ 17695);
/* harmony import */ var _dynamic_rule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-rule */ 44624);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal-login */ 84312);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ 33185);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./normal-login */ 81695);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register */ 63623);
/* harmony import */ var _time_related_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time-related-controls */ 21904);
/* harmony import */ var _validate_reactive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validate-reactive */ 73315);
/* harmony import */ var _validate_static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validate-static */ 34166);
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validate-template */ 96543);
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zh.component */ 28865);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./en.component */ 83973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/select */ 80269);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/radio */ 71398);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 20324);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 38547);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 90343);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);






























class NzDemoFormModule {
}
NzDemoFormModule.ɵfac = function NzDemoFormModule_Factory(t) { return new (t || NzDemoFormModule)(); };
NzDemoFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: NzDemoFormModule });
NzDemoFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule,
            ..._module__WEBPACK_IMPORTED_MODULE_1__.moduleList,
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_16__.NzDemoFormEnComponent },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoFormZhComponent }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](NzDemoFormModule, { declarations: [_advanced_search__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormAdvancedSearchComponent,
        _auto_tips__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormAutoTipsComponent,
        _coordinated__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormCoordinatedComponent,
        _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormDynamicFormItemComponent,
        _dynamic_rule__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormDynamicRuleComponent,
        _horizontal_login__WEBPACK_IMPORTED_MODULE_7__.NzDemoFormHorizontalLoginComponent,
        _layout__WEBPACK_IMPORTED_MODULE_8__.NzDemoFormLayoutComponent,
        _normal_login__WEBPACK_IMPORTED_MODULE_9__.NzDemoFormNormalLoginComponent,
        _register__WEBPACK_IMPORTED_MODULE_10__.NzDemoFormRegisterComponent,
        _time_related_controls__WEBPACK_IMPORTED_MODULE_11__.NzDemoFormTimeRelatedControlsComponent,
        _validate_reactive__WEBPACK_IMPORTED_MODULE_12__.NzDemoFormValidateReactiveComponent,
        _validate_static__WEBPACK_IMPORTED_MODULE_13__.NzDemoFormValidateStaticComponent,
        _validate_template__WEBPACK_IMPORTED_MODULE_14__.NzDemoFormValidateTemplateComponent,
        _zh_component__WEBPACK_IMPORTED_MODULE_15__.NzDemoFormZhComponent,
        _en_component__WEBPACK_IMPORTED_MODULE_16__.NzDemoFormEnComponent], imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__.NzSelectModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__.NzRadioModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__.NzDatePickerModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_26__.NzTimePickerModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__.NzCheckboxModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


/***/ }),

/***/ 33185:
/*!*******************************************!*\
  !*** ./src/app/components/form/layout.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormLayoutComponent": () => (/* binding */ NzDemoFormLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/radio */ 71398);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);










class NzDemoFormLayoutComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    get isHorizontal() {
        var _a;
        return ((_a = this.validateForm.controls.formLayout) === null || _a === void 0 ? void 0 : _a.value) === 'horizontal';
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            formLayout: ['horizontal'],
            fieldA: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            filedB: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
        });
    }
}
NzDemoFormLayoutComponent.ɵfac = function NzDemoFormLayoutComponent_Factory(t) { return new (t || NzDemoFormLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoFormLayoutComponent, selectors: [["nz-demo-form-layout"]], decls: 26, vars: 13, consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [3, "nzSpan"], ["formControlName", "formLayout"], ["nz-radio-button", "", 3, "nzValue"], ["nzErrorTip", "Please input your username!", 3, "nzSpan"], ["nz-input", "", "formControlName", "fieldA", "placeholder", "input placeholder"], ["nzErrorTip", "Please input your Password!", 3, "nzSpan"], ["nz-input", "", "formControlName", "filedB", "placeholder", "input placeholder"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormLayoutComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Form Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Field A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Field B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLayout", (tmp_0_0 = ctx.validateForm.get("formLayout")) == null ? null : tmp_0_0.value)("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null)("nzOffset", ctx.isHorizontal ? 4 : null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioButtonDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: ["[nz-form][_ngcontent-%COMP%]:not(.ant-form-inline):not(.ant-form-vertical) {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoibGF5b3V0LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotZm9ybV06bm90KC5hbnQtZm9ybS1pbmxpbmUpOm5vdCguYW50LWZvcm0tdmVydGljYWwpIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 9547:
/*!*******************************************!*\
  !*** ./src/app/components/form/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleList": () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 80269);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 71398);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 20324);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 38547);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 90343);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);










const moduleList = [
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_0__.NzFormModule,
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule,
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__.NzDatePickerModule,
    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_7__.NzTimePickerModule,
    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__.NzInputNumberModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule
];


/***/ }),

/***/ 81695:
/*!*************************************************!*\
  !*** ./src/app/components/form/normal-login.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormNormalLoginComponent": () => (/* binding */ NzDemoFormNormalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);










class NzDemoFormNormalLoginComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            remember: [true]
        });
    }
}
NzDemoFormNormalLoginComponent.ɵfac = function NzDemoFormNormalLoginComponent_Factory(t) { return new (t || NzDemoFormNormalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
NzDemoFormNormalLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoFormNormalLoginComponent, selectors: [["nz-demo-form-normal-login"]], decls: 22, vars: 4, consts: [["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "Username"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password"], ["nz-row", "", 1, "login-form-margin"], ["nz-col", "", 3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], [1, "login-form-forgot"], ["nz-button", "", 1, "login-form-button", "login-form-margin", 3, "nzType"]], template: function NzDemoFormNormalLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormNormalLoginComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-input-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Forgot password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " register now! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__.NzCheckboxComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective], styles: [".login-form[_ngcontent-%COMP%] {\n        max-width: 300px;\n      }\n\n      .login-form-margin[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n\n      .login-form-forgot[_ngcontent-%COMP%] {\n        float: right;\n      }\n\n      .login-form-button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbC1sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxtQkFBbUI7TUFDckI7O01BRUE7UUFDRSxZQUFZO01BQ2Q7O01BRUE7UUFDRSxXQUFXO01BQ2IiLCJmaWxlIjoibm9ybWFsLWxvZ2luLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAubG9naW4tZm9ybSB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1mb3JtLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cblxuICAgICAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 63623:
/*!*********************************************!*\
  !*** ./src/app/components/form/register.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormRegisterComponent": () => (/* binding */ NzDemoFormRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 47420);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 80269);














function NzDemoFormRegisterComponent_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormRegisterComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Two passwords that you enter is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormRegisterComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormRegisterComponent_ng_template_16_ng_container_0_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormRegisterComponent_ng_template_16_ng_container_1_Template, 2, 0, "ng-container", 33);
} if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r4.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r4.hasError("confirm"));
} }
function NzDemoFormRegisterComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoFormRegisterComponent {
    constructor(fb) {
        this.fb = fb;
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }
    getCaptcha(e) {
        e.preventDefault();
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, this.confirmationValidator]],
            nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            website: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            agree: [false]
        });
    }
}
NzDemoFormRegisterComponent.ɵfac = function NzDemoFormRegisterComponent_Factory(t) { return new (t || NzDemoFormRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormRegisterComponent, selectors: [["nz-demo-form-register"]], decls: 59, vars: 39, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "email", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid E-mail!", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "password", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "password", "id", "password", "formControlName", "password", 3, "ngModelChange"], ["nzFor", "checkPassword", "nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["nz-input", "", "type", "password", "formControlName", "checkPassword", "id", "checkPassword"], ["errorTpl", ""], ["nzFor", "nickname", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "What do you want other to call you", "nzType", "question-circle", "nzTheme", "outline"], ["nzErrorTip", "Please input your nickname!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "nickname", "formControlName", "nickname"], ["nzFor", "phoneNumber", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your phone number!", 3, "nzSm", "nzXs", "nzValidateStatus"], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "'phoneNumber'", "nz-input", ""], ["nzFor", "website", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input website!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "website", "formControlName", "website", "placeholder", "website"], ["nzFor", "captcha", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input the captcha you got!", "nzExtra", "We must make sure that your are a human.", 3, "nzSm", "nzXs"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nz-input", "", "formControlName", "captcha", "id", "captcha"], ["nz-button", "", 3, "click"], ["nz-row", "", 1, "register-area"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "agree"], ["nz-button", "", "nzType", "primary"], [4, "ngIf"], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], ["nzLabel", "+86", "nzValue", "+86"], ["nzLabel", "+87", "nzValue", "+87"]], template: function NzDemoFormRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NzDemoFormRegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoFormRegisterComponent_Template_input_ngModelChange_10_listener() { return ctx.updateConfirmValidator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NzDemoFormRegisterComponent_ng_template_16_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nickname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NzDemoFormRegisterComponent_ng_template_30_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-form-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Captcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-form-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormRegisterComponent_Template_button_click_46_listener($event) { return ctx.getCaptcha($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Get captcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nz-form-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nz-form-control", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "I have read the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nz-form-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-form-control", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzValidateStatus", ctx.validateForm.controls["phoneNumber"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnBefore", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      .phone-select[_ngcontent-%COMP%] {\n        width: 70px;\n      }\n\n      .register-are[_ngcontent-%COMP%] {\n        margin-bottom: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLFdBQVc7TUFDYjs7TUFFQTtRQUNFLGtCQUFrQjtNQUNwQiIsImZpbGUiOiJyZWdpc3Rlci50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgLnBob25lLXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgfVxuXG4gICAgICAucmVnaXN0ZXItYXJlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"] });


/***/ }),

/***/ 21904:
/*!**********************************************************!*\
  !*** ./src/app/components/form/time-related-controls.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormTimeRelatedControlsComponent": () => (/* binding */ NzDemoFormTimeRelatedControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 20324);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 38547);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);









const _c0 = function () { return { span: 24, offset: 0 }; };
const _c1 = function () { return { span: 16, offset: 8 }; };
class NzDemoFormTimeRelatedControlsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    submitForm() {
        console.log(this.validateForm.value);
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            datePicker: [null],
            datePickerTime: [null],
            monthPicker: [null],
            rangePicker: [[]],
            rangePickerTime: [[]],
            timePicker: [null]
        });
    }
}
NzDemoFormTimeRelatedControlsComponent.ɵfac = function NzDemoFormTimeRelatedControlsComponent_Factory(t) { return new (t || NzDemoFormTimeRelatedControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
NzDemoFormTimeRelatedControlsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormTimeRelatedControlsComponent, selectors: [["nz-demo-form-time-related-controls"]], decls: 35, vars: 29, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["formControlName", "datePicker"], ["nzShowTime", "", "formControlName", "datePickerTime"], ["formControlName", "monthPicker"], ["formControlName", "rangePicker"], ["nzShowTime", "", "formControlName", "rangePickerTime"], ["formControlName", "timePicker"], [3, "nzXs", "nzSm"], ["nz-button", "", "nzType", "primary"]], template: function NzDemoFormTimeRelatedControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NzDemoFormTimeRelatedControlsComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-date-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DatePicker[ShowTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-date-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MonthPicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-month-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "RangePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-range-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "RangePicker[showTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nz-range-picker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "TimePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nz-time-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0))("nzSm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzMonthPickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzRangePickerComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_5__.NzTimePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: ["form[_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtcmVsYXRlZC1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEIiLCJmaWxlIjoidGltZS1yZWxhdGVkLWNvbnRyb2xzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBmb3JtIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 73315:
/*!******************************************************!*\
  !*** ./src/app/components/form/validate-reactive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormValidateReactiveComponent": () => (/* binding */ NzDemoFormValidateReactiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);











function NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input your username! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The username is redundant! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_0_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormValidateReactiveComponent_ng_template_6_ng_container_1_Template, 2, 0, "ng-container", 17);
} if (rf & 2) {
    const control_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r6.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r6.hasError("duplicated"));
} }
function NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The input is not valid E-mail! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input your E-mail! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_0_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormValidateReactiveComponent_ng_template_13_ng_container_1_Template, 2, 0, "ng-container", 17);
} if (rf & 2) {
    const control_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r9.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r9.hasError("required"));
} }
function NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateReactiveComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_0_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormValidateReactiveComponent_ng_template_25_ng_container_1_Template, 2, 0, "ng-container", 17);
} if (rf & 2) {
    const control_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r12.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r12.hasError("confirm"));
} }
class NzDemoFormValidateReactiveComponent {
    constructor(fb) {
        this.fb = fb;
        this.userNameAsyncValidator = (control) => new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    // you have to return `{error: true}` to mark it as an error event
                    observer.next({ error: true, duplicated: true });
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });
        this.confirmValidator = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.validateForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required], [this.userNameAsyncValidator]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            confirm: ['', [this.confirmValidator]],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    submitForm(value) {
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
        console.log(value);
    }
    resetForm(e) {
        e.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    validateConfirmPassword() {
        setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
    }
}
NzDemoFormValidateReactiveComponent.ɵfac = function NzDemoFormValidateReactiveComponent_Factory(t) { return new (t || NzDemoFormValidateReactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
NzDemoFormValidateReactiveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormValidateReactiveComponent, selectors: [["nz-demo-form-validate-reactive"]], decls: 38, vars: 17, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", 3, "nzSpan"], ["nzHasFeedback", "", "nzValidatingTip", "Validating...", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "userName", "placeholder", "async validate try to write JasonWood"], ["userErrorTpl", ""], ["nzHasFeedback", "", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "email", "placeholder", "email", "type", "email"], ["emailErrorTpl", ""], ["nzHasFeedback", "", "nzErrorTip", "Please input your password!", 3, "nzSpan"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "ngModelChange"], ["nz-input", "", "type", "password", "formControlName", "confirm", "placeholder", "confirm your password"], ["passwordErrorTpl", ""], ["nzErrorTip", "Please write something here!", 3, "nzSpan"], ["formControlName", "comment", "nz-input", "", "rows", "2", "placeholder", "write any thing"], [3, "nzOffset", "nzSpan"], ["nz-button", "", "nzType", "primary", 3, "disabled"], ["nz-button", "", 3, "click"], [4, "ngIf"]], template: function NzDemoFormValidateReactiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NzDemoFormValidateReactiveComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(ctx.validateForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoFormValidateReactiveComponent_ng_template_6_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoFormValidateReactiveComponent_ng_template_13_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoFormValidateReactiveComponent_Template_input_ngModelChange_19_listener() { return ctx.validateConfirmPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NzDemoFormValidateReactiveComponent_ng_template_25_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-control", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormValidateReactiveComponent_Template_button_click_36_listener($event) { return ctx.resetForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffset", 7)("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validateForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-left: 8px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXJlYWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLGdCQUFnQjtNQUNsQiIsImZpbGUiOiJ2YWxpZGF0ZS1yZWFjdGl2ZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 34166:
/*!****************************************************!*\
  !*** ./src/app/components/form/validate-static.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormValidateStaticComponent": () => (/* binding */ NzDemoFormValidateStaticComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 20324);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 38547);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ 80269);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 90343);









class NzDemoFormValidateStaticComponent {
}
NzDemoFormValidateStaticComponent.ɵfac = function NzDemoFormValidateStaticComponent_Factory(t) { return new (t || NzDemoFormValidateStaticComponent)(); };
NzDemoFormValidateStaticComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormValidateStaticComponent, selectors: [["nz-demo-form-validate-static"]], decls: 60, vars: 30, consts: [["nz-form", ""], [3, "nzSpan"], ["nzValidateStatus", "error", "nzErrorTip", "Should be combination of numbers & alphabets", 3, "nzSpan"], ["nz-input", "", "name", "errorValid", 3, "ngModel"], ["nzValidateStatus", "warning", 3, "nzSpan"], ["nz-input", "", "name", "warningValid", 3, "ngModel"], ["nzValidateStatus", "validating", "nzHasFeedback", "", "nzValidatingTip", "I'm validating the content", 3, "nzSpan"], ["nz-input", "", "name", "validating", 3, "ngModel"], ["nzValidateStatus", "success", "nzHasFeedback", "", 3, "nzSpan"], ["nz-input", "", "name", "successValid", 3, "ngModel"], ["nzValidateStatus", "warning", "nzHasFeedback", "", "nzWarningTip", "Should be combination of numbers & alphabets", 3, "nzSpan"], ["nz-input", "", "name", "warningHighValid", 3, "ngModel"], ["nzValidateStatus", "error", "nzHasFeedback", "", "nzErrorTip", "Should be combination of numbers & alphabets", 3, "nzSpan"], ["nz-input", "", "name", "invalidValid", 3, "ngModel"], ["name", "date-picker-success"], ["nzValidateStatus", "warning", "nzHasFeedback", "", 3, "nzSpan"], ["name", "time-picker-warning"], ["nzValidateStatus", "error", "nzHasFeedback", "", 3, "nzSpan"], ["name", "select-error", 3, "ngModel"], ["nzValue", "Option 1", "nzLabel", "Option 1"], ["nzValue", "Option 2", "nzLabel", "Option 2"], ["nzValidateStatus", "validating", "nzHasFeedback", "", 3, "nzSpan"], ["name", "select-validate", 3, "ngModel"], ["name", "inputnumber-success", 2, "width", "100%"]], template: function NzDemoFormValidateStaticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Validating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nz-date-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nz-time-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Validating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nz-form-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nz-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "nz-input-number", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "unavailable choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "The content is being validated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "The content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "unavailable choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__.NzDatePickerComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_6__.NzTimePickerComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__.NzInputNumberComponent], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n\n      nz-date-picker[_ngcontent-%COMP%]     .ant-calendar-picker {\n        width: 100%;\n      }\n\n      nz-date-picker[_ngcontent-%COMP%], nz-time-picker[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXN0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxXQUFXO01BQ2I7O01BRUE7O1FBRUUsV0FBVztNQUNiIiwiZmlsZSI6InZhbGlkYXRlLXN0YXRpYy50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cblxuICAgICAgbnotZGF0ZS1waWNrZXIgOjpuZy1kZWVwIC5hbnQtY2FsZW5kYXItcGlja2VyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG56LWRhdGUtcGlja2VyLFxuICAgICAgbnotdGltZS1waWNrZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 96543:
/*!******************************************************!*\
  !*** ./src/app/components/form/validate-template.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormValidateTemplateComponent": () => (/* binding */ NzDemoFormValidateTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






function NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MaxLength is 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MinLength is 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NzDemoFormValidateTemplateComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_0_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_1_Template, 2, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoFormValidateTemplateComponent_ng_template_31_ng_container_2_Template, 2, 0, "ng-container", 15);
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r2.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r2.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r2.hasError("required"));
} }
class NzDemoFormValidateTemplateComponent {
}
NzDemoFormValidateTemplateComponent.ɵfac = function NzDemoFormValidateTemplateComponent_Factory(t) { return new (t || NzDemoFormValidateTemplateComponent)(); };
NzDemoFormValidateTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoFormValidateTemplateComponent, selectors: [["nz-demo-form-validate-template"]], decls: 33, vars: 19, consts: [["nz-form", ""], [3, "nzSpan"], ["nzHasFeedback", "", "nzErrorTip", "Input is required", 3, "nzSpan"], ["nz-input", "", "name", "required", "required", "", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "MaxLength is 6", 3, "nzSpan"], ["nz-input", "", "name", "maxlength", "maxlength", "6", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "MinLength is 6", 3, "nzSpan"], ["nz-input", "", "name", "minlength", "minlength", "6", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "Email is not valid", 3, "nzSpan"], ["nz-input", "", "name", "email", "email", "", 3, "ngModel"], ["nzHasFeedback", "", "nzErrorTip", "Pattern not match", 3, "nzSpan"], ["nz-input", "", "name", "pattern", "pattern", ".{3,}", 3, "ngModel"], ["nzHasFeedback", "", 3, "nzSpan", "nzErrorTip"], ["nz-input", "", "name", "mix", "minlength", "6", "maxlength", "12", "required", "", 3, "ngModel"], ["combineTpl", ""], [4, "ngIf"]], template: function NzDemoFormValidateTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MaxLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MinLength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-control", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NzDemoFormValidateTemplateComponent_ng_template_31_Template, 3, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Required Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "MaxLength is 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "MinLength is 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Input Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "Match pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 12)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "MaxLength is 12 and MinLength is 6");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["[nz-form][_ngcontent-%COMP%] {\n        max-width: 600px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtNQUNsQiIsImZpbGUiOiJ2YWxpZGF0ZS10ZW1wbGF0ZS50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWZvcm1dIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 28865:
/*!*************************************************!*\
  !*** ./src/app/components/form/zh.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzDemoFormZhComponent": () => (/* binding */ NzDemoFormZhComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 81251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/affix */ 36175);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 58925);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 47420);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-login */ 84312);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-login */ 81695);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ 63623);
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-search */ 24166);
/* harmony import */ var _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form-item */ 17695);
/* harmony import */ var _time_related_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-related-controls */ 21904);
/* harmony import */ var _validate_reactive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate-reactive */ 73315);
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validate-template */ 96543);
/* harmony import */ var _auto_tips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auto-tips */ 97240);
/* harmony import */ var _validate_static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate-static */ 34166);
/* harmony import */ var _coordinated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coordinated */ 60156);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout */ 33185);
/* harmony import */ var _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dynamic-rule */ 44624);






















class NzDemoFormZhComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoFormZhComponent.ɵfac = function NzDemoFormZhComponent_Factory(t) { return new (t || NzDemoFormZhComponent)(); };
NzDemoFormZhComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: NzDemoFormZhComponent, selectors: [["nz-demo-form"]], viewQuery: function NzDemoFormZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 883, vars: 43, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-form-demo-horizontal-login", "nzTitle", "\u5185\u8054\u767B\u5F55\u680F"], ["nzHref", "#components-form-demo-normal-login", "nzTitle", "\u767B\u5F55\u6846"], ["nzHref", "#components-form-demo-register", "nzTitle", "\u6CE8\u518C\u65B0\u7528\u6237"], ["nzHref", "#components-form-demo-advanced-search", "nzTitle", "\u9AD8\u7EA7\u641C\u7D22"], ["nzHref", "#components-form-demo-dynamic-form-item", "nzTitle", "\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"], ["nzHref", "#components-form-demo-time-related-controls", "nzTitle", "\u65F6\u95F4\u7C7B\u63A7\u4EF6"], ["nzHref", "#components-form-demo-validate-reactive", "nzTitle", "\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1"], ["nzHref", "#components-form-demo-validate-template", "nzTitle", "\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1"], ["nzHref", "#components-form-demo-auto-tips", "nzTitle", "\u81EA\u52A8\u63D0\u793A"], ["nzHref", "#components-form-demo-validate-static", "nzTitle", "\u624B\u52A8\u6307\u5B9A\u8868\u5355\u72B6\u6001"], ["nzHref", "#components-form-demo-coordinated", "nzTitle", "\u8868\u5355\u8054\u52A8"], ["nzHref", "#components-form-demo-layout", "nzTitle", "\u8868\u5355\u5E03\u5C40"], ["nzHref", "#components-form-demo-dynamic-rule", "nzTitle", "\u52A8\u6001\u6821\u9A8C\u89C4\u5219"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["href", "https://angular.io/guide/forms#forms"], ["href", "https://angular.io/guide/reactive-forms#reactive-forms"], ["href", "https://angular.io/guide/forms#template-driven-forms"], ["id", "\u8868\u5355"], ["onclick", "window.location.hash = '\u8868\u5355'", 1, "anchor"], ["id", "\u8868\u5355\u9879-nz-form-item"], ["onclick", "window.location.hash = '\u8868\u5355\u9879-nz-form-item'", 1, "anchor"], ["id", "\u8868\u5355\u6807\u7B7E-nz-form-label"], ["onclick", "window.location.hash = '\u8868\u5355\u6807\u7B7E-nz-form-label'", 1, "anchor"], ["id", "\u8868\u5355\u57DF-nz-form-control"], ["onclick", "window.location.hash = '\u8868\u5355\u57DF-nz-form-control'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "punctuation"], [1, "token", "attr-name"], [1, "token", "attr-value"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u5185\u8054\u767B\u5F55\u680F", "nzSelector", "nz-demo-form-horizontal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-horizontal-login <name>", "nzComponentName", "NzDemoFormHorizontalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u767B\u5F55\u6846", "nzSelector", "nz-demo-form-normal-login", "nzGenerateCommand", "ng g ng-zorro-antd:form-normal-login <name>", "nzComponentName", "NzDemoFormNormalLoginComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6CE8\u518C\u65B0\u7528\u6237", "nzSelector", "nz-demo-form-register", "nzGenerateCommand", "ng g ng-zorro-antd:form-register <name>", "nzComponentName", "NzDemoFormRegisterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9AD8\u7EA7\u641C\u7D22", "nzSelector", "nz-demo-form-advanced-search", "nzGenerateCommand", "ng g ng-zorro-antd:form-advanced-search <name>", "nzComponentName", "NzDemoFormAdvancedSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879", "nzSelector", "nz-demo-form-dynamic-form-item", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-form-item <name>", "nzComponentName", "NzDemoFormDynamicFormItemComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65F6\u95F4\u7C7B\u63A7\u4EF6", "nzSelector", "nz-demo-form-time-related-controls", "nzGenerateCommand", "ng g ng-zorro-antd:form-time-related-controls <name>", "nzComponentName", "NzDemoFormTimeRelatedControlsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://date-fns.org/"], ["nzTitle", "\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1", "nzSelector", "nz-demo-form-validate-reactive", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-reactive <name>", "nzComponentName", "NzDemoFormValidateReactiveComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "(https://www.angular.cn/guide/template-syntax)"], ["nzTitle", "\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1", "nzSelector", "nz-demo-form-validate-template", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-template <name>", "nzComponentName", "NzDemoFormValidateTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u52A8\u63D0\u793A", "nzSelector", "nz-demo-form-auto-tips", "nzGenerateCommand", "ng g ng-zorro-antd:form-auto-tips <name>", "nzComponentName", "NzDemoFormAutoTipsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u624B\u52A8\u6307\u5B9A\u8868\u5355\u72B6\u6001", "nzSelector", "nz-demo-form-validate-static", "nzGenerateCommand", "ng g ng-zorro-antd:form-validate-static <name>", "nzComponentName", "NzDemoFormValidateStaticComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8868\u5355\u8054\u52A8", "nzSelector", "nz-demo-form-coordinated", "nzGenerateCommand", "ng g ng-zorro-antd:form-coordinated <name>", "nzComponentName", "NzDemoFormCoordinatedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8868\u5355\u5E03\u5C40", "nzSelector", "nz-demo-form-layout", "nzGenerateCommand", "ng g ng-zorro-antd:form-layout <name>", "nzComponentName", "NzDemoFormLayoutComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u6001\u6821\u9A8C\u89C4\u5219", "nzSelector", "nz-demo-form-dynamic-rule", "nzGenerateCommand", "ng g ng-zorro-antd:form-dynamic-rule <name>", "nzComponentName", "NzDemoFormDynamicRuleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "[nz-form]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-form]'", 1, "anchor"], ["id", "nz-form-item"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-form-item'", 1, "anchor"], ["href", "/components/grid/zh"], ["id", "nz-form-label"], ["onclick", "window.location.hash = 'nz-form-label'", 1, "anchor"], ["id", "nz-form-control"], ["onclick", "window.location.hash = 'nz-form-control'", 1, "anchor"], ["href", "https://github.com/angular/angular/issues/10887"], ["id", "nz-form-split"], ["onclick", "window.location.hash = 'nz-form-split'", 1, "anchor"], ["id", "nz-form-text"], ["onclick", "window.location.hash = 'nz-form-text'", 1, "anchor"]], template: function NzDemoFormZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzClick", function NzDemoFormZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "\u5177\u6709\u6570\u636E\u6536\u96C6\u3001\u6821\u9A8C\u548C\u63D0\u4EA4\u529F\u80FD\u7684\u8868\u5355\uFF0C\u5305\u542B\u590D\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u5143\u7D20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "\u8BE5\u7EC4\u4EF6\u9700\u8981\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Angular\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, " \u7ED3\u5408\u4F7F\u7528\uFF0C\u5F00\u53D1\u8005\u6839\u636E\u9700\u8981\u53EF\u4EE5\u81EA\u7531\u9009\u62E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "\u54CD\u5E94\u5F0F\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "\u6A21\u677F\u9A71\u52A8\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u524D\u8BF7\u786E\u4FDD\u60A8\u5DF2\u7ECF\u9605\u8BFB\u5E76\u638C\u63E1\u4E86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, " \u7684\u4F7F\u7528\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "\u6211\u4EEC\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u79CD\u6392\u5217\u65B9\u5F0F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "\u6C34\u5E73\u6392\u5217\uFF1A\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u6C34\u5E73\u6392\u5217\uFF1B\uFF08\u9ED8\u8BA4\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, "\u5782\u76F4\u6392\u5217\uFF1A\u6807\u7B7E\u548C\u8868\u5355\u63A7\u4EF6\u4E0A\u4E0B\u5782\u76F4\u6392\u5217\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "\u884C\u5185\u6392\u5217\uFF1A\u8868\u5355\u9879\u6C34\u5E73\u884C\u5185\u6392\u5217\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "\u8868\u5355\u9879 nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "\u8868\u5355\u9879\u7528\u4E8E\u533A\u5206\u8868\u5355\u4E2D\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u5305\u542B\u8868\u5355\u57DF\u548C\u8868\u5355\u6807\u7B7E(\u53EF\u9009)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "\u8868\u5355\u6807\u7B7E nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "\u7528\u4E8E\u6807\u793A\u5F53\u524D\u8868\u5355\u9879\u7684\u5185\u5BB9\uFF0C\u53EF\u9009\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, "\u8868\u5355\u57DF nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "\u8868\u5355\u4E00\u5B9A\u4F1A\u5305\u542B\u8868\u5355\u57DF\uFF0C\u8868\u5355\u57DF\u53EF\u4EE5\u662F\u8F93\u5165\u63A7\u4EF6\uFF0C\u6807\u51C6\u8868\u5355\u57DF\uFF0C\u6807\u7B7E\uFF0C\u4E0B\u62C9\u83DC\u5355\uFF0C\u6587\u672C\u57DF\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "pre", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](89, "nz-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](92, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](96, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](100, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](104, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](105, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](111, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](114, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](117, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](118, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, "nzFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](124, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](127, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](129, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](138, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](140, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](143, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](144, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](146, "[nzSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](149, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](151, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](154, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](155, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](157, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](158, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](160, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](161, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](162, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](165, "nz-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](166, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](168, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](169, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](171, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](172, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](173, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](174, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](175, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](176, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](177, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](178, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](179, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](184, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](186, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](187, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](188, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](189, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](190, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](191, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](192, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](193, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](194, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](195, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](196, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](197, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](198, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](199, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](200, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](201, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](202, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](203, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](204, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](205, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](206, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](207, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](208, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](209, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](210, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](211, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](212, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](213, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](214, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](215, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](216, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](217, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](218, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](219, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](221, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](222, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](223, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](224, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](226, "pre", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](228, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](229, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](230, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](231, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](232, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](233, " NzFormModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](234, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](235, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](236, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](237, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](238, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](239, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](240, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](241, "'ng-zorro-antd/form'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](242, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](243, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](244, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](246, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](247, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function NzDemoFormZhComponent_Template_i_click_247_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](248, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](249, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](250, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](251, "nz-demo-form-horizontal-login", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](252, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](253, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](254, "\u5185\u8054\u767B\u5F55\u680F\uFF0C\u5E38\u7528\u5728\u9876\u90E8\u5BFC\u822A\u680F\u4E2D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](255, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](256, "nz-demo-form-normal-login", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](257, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](259, "\u666E\u901A\u7684\u767B\u5F55\u6846\uFF0C\u53EF\u4EE5\u5BB9\u7EB3\u66F4\u591A\u7684\u5143\u7D20\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](260, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](261, "nz-demo-form-register", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](262, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](264, "\u7528\u6237\u586B\u5199\u5FC5\u987B\u7684\u4FE1\u606F\u4EE5\u6CE8\u518C\u65B0\u7528\u6237\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](265, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](266, "nz-demo-form-advanced-search", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](268, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](269, "\u4E09\u5217\u6805\u683C\u5F0F\u7684\u8868\u5355\u6392\u5217\u65B9\u5F0F\uFF0C\u5E38\u7528\u4E8E\u6570\u636E\u8868\u683C\u7684\u9AD8\u7EA7\u641C\u7D22\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](271, "\u6709\u90E8\u5206\u5B9A\u5236\u7684\u6837\u5F0F\u4EE3\u7801\uFF0C\u7531\u4E8E\u8F93\u5165\u6807\u7B7E\u957F\u5EA6\u4E0D\u786E\u5B9A\uFF0C\u9700\u8981\u6839\u636E\u5177\u4F53\u60C5\u51B5\u81EA\u884C\u8C03\u6574\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](272, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](273, "nz-demo-form-dynamic-form-item", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](274, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](275, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](276, "\u52A8\u6001\u589E\u52A0\u3001\u51CF\u5C11\u8868\u5355\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](277, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](278, "nz-demo-form-time-related-controls", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](279, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](280, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](281, "\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u8F93\u5165\u548C\u8F93\u51FA\u7C7B\u578B\u5747\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](282, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](283, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](284, " \u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](285, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](286, "date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](287, " \u5DE5\u5177\u5E93\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u5904\u7406\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](288, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](289, "nz-demo-form-validate-reactive", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](290, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](292, "\u6211\u4EEC\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](294, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](295, " \u4E0A \u63D0\u4F9B\u4E86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](297, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](299, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](300, " \u7B49\u5C5E\u6027\uFF0C\u5F53\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](301, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](302, "\u54CD\u5E94\u5F0F\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](303, "\u65F6\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u6821\u9A8C\u7684\u65F6\u673A\u548C\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](304, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](305, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](307, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](308, ": \u6821\u9A8C\u72B6\u6001\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u4ECE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](310, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](311, " \u4E2D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](313, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](314, " \u83B7\u5F97\u6821\u9A8C\u72B6\u6001\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u4E3A\u7279\u5B9A\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](316, "NgControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](317, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](318, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](320, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](321, "\uFF1A\u7528\u4E8E\u7ED9\u8F93\u5165\u6846\u6DFB\u52A0\u53CD\u9988\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](322, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](323, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](324, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](326, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](328, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](330, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](331, "\uFF1A\u8BBE\u7F6E\u4E0D\u540C\u72B6\u6001\u6821\u9A8C\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](332, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](333, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](334, "\u5F53\u540C\u4E00\u79CD\u72B6\u6001\u4E0B\u5B58\u5728\u591A\u79CD\u63D0\u793A\u60C5\u51B5\u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](336, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](338, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](340, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](342, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](343, " \u5747\u652F\u6301\u4F20\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](345, "TemplateRef<{ $implicit: FormControl }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](346, " \u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](347, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](348, "\u6A21\u677F\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](349, "\u5BFC\u51FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](351, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](352, " \u540E\u7528\u4E8E\u5207\u6362\u4E0D\u540C\u7684\u63D0\u793A\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](353, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](354, "\u5F53 FormControl.status \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](356, "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](357, " \u5E76\u4E14\u9519\u8BEF\u5305\u542B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](359, "{warning\uFF1Atrue}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](360, " \u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](362, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](363, " \u663E\u793A\u8B66\u544A\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](364, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](365, "nz-demo-form-validate-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](366, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](367, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](368, "\u5F53\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](369, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](370, "\u6A21\u677F\u9A71\u52A8\u8868\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](371, "\u65F6\uFF0C\u6A21\u677F\u53EF\u4EE5\u6839\u636E\u6A21\u677F\u8BBE\u5B9A\u81EA\u52A8\u8FDB\u884C\u6821\u9A8C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](372, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](373, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](375, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](376, "\uFF1A\u7528\u4E8E\u7ED9\u8F93\u5165\u6846\u6DFB\u52A0\u53CD\u9988\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](377, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](379, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](381, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](383, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](384, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](385, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](386, "\uFF1A\u8BBE\u7F6E\u4E0D\u540C\u72B6\u6001\u6821\u9A8C\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](387, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](388, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](389, "\u5F53\u540C\u4E00\u79CD\u72B6\u6001\u4E0B\u5B58\u5728\u591A\u79CD\u63D0\u793A\u60C5\u51B5\u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](391, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](393, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](395, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](397, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](398, " \u5747\u652F\u6301\u4F20\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](399, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](400, "TemplateRef<{ $implicit: NgModel }");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](401, " \u7C7B\u578B\uFF0C\u53EF\u4EE5\u901A\u8FC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](402, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](403, "\u6A21\u677F\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](404, "\u5BFC\u51FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](406, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](407, " \u540E\u7528\u4E8E\u5207\u6362\u4E0D\u540C\u7684\u63D0\u793A\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](408, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](409, "nz-demo-form-auto-tips", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](410, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](411, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](412, "\u8BA9\u63D0\u793A\u53D8\u5F97\u66F4\u7B80\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](413, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](414, "\u9700\u8981\u9884\u5148\u81EA\u5B9A\u4E49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](416, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](417, " \u548C\u63D0\u4F9B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](419, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](420, "\uFF0C\u5B83\u4EEC\u4F18\u5148\u7EA7\u5982\u4E0B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](421, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](422, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](424, "Validators");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](425, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](427, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](428, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](429, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](431, "@Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](432, " \u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](434, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](435, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](436, "\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](438, "nzAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](439, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](440, "\u53E6\u5916\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](442, "nzDisableAutoTips");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](443, " \u53BB\u7981\u7528\u5B83\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](444, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](445, "nz-demo-form-validate-static", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](446, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](447, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](448, "\u7528\u6237\u53EF\u4EE5\u5728\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](450, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](451, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](453, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](454, " \u5C5E\u6027\u76F4\u63A5\u8BBE\u5B9A\u8868\u5355\u7684\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](455, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](456, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](458, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](459, ": \u6821\u9A8C\u72B6\u6001\uFF0C\u53EF\u9009 'success', 'warning', 'error', 'validating'\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](460, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](462, "nzHasFeedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](463, "\uFF1A\u7528\u4E8E\u7ED9\u8F93\u5165\u6846\u6DFB\u52A0\u53CD\u9988\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](464, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](466, "nzSuccessTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](468, "nzWarningTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](470, "nzErrorTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](472, "nzValidatingTip");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](473, "\uFF1A\u8BBE\u7F6E\u4E0D\u540C\u72B6\u6001\u6821\u9A8C\u6587\u6848\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](474, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](475, "nz-demo-form-coordinated", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](476, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](477, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](478, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](480, "setValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](481, " \u6765\u52A8\u6001\u8BBE\u7F6E\u5176\u4ED6\u63A7\u4EF6\u7684\u503C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](482, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](483, "nz-demo-form-layout", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](484, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](485, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](486, "\u8868\u5355\u6709\u4E09\u79CD\u5E03\u5C40\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](487, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](488, "nz-demo-form-dynamic-rule", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](489, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](490, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](491, "\u6839\u636E\u4E0D\u540C\u60C5\u51B5\u6267\u884C\u4E0D\u540C\u7684\u6821\u9A8C\u89C4\u5219\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](492, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](493, "h2", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](494, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](495, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](496, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](497, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](498, "h3", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](499, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](500, "[nz-form]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](501, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](502, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](503, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](504, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](505, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](506, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](507, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](508, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](509, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](510, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](511, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](512, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](513, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](514, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](515, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](516, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](517, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](518, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](519, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](522, "[nzLayout]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](524, "\u8868\u5355\u5E03\u5C40");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](527, "'horizontal' | 'vertical' | 'inline'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](529, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](530, "'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](532, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](535, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](536, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](537, "\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](539, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](540, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](541, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](542, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](543, " \u7684\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](545, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](546, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](547, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](549, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](551, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](552, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](554, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](555, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](557, "\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](558, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](559, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](560, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](562, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](563, " \u7684\u9ED8\u8BA4\u503C, \u5177\u4F53\u7528\u6CD5\u8BF7\u53C2\u8003\u793A\u4F8B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](564, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](565, "\u81EA\u52A8\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](568, "Record<string, Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](570, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](571, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](573, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](574, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](576, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](577, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](579, "\u914D\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](581, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](582, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](583, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](584, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](585, " \u7684\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](587, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](588, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](590, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](591, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](592, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](593, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](594, "h3", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](595, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](596, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](597, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](598, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](599, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](600, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](601, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](602, "\u8868\u5355\u9879\u7528\u4E8E\u533A\u5206\u8868\u5355\u4E2D\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u5305\u542B\u8868\u5355\u57DF\u548C\u8868\u5355\u6807\u7B7E(\u53EF\u9009)\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](603, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](604, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](605, "\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](606, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](607, "nz-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](608, " \u7684\u53C2\u6570\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](609, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](610, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](611, " \u4E0A\u5747\u53EF\u76F4\u63A5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](612, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](613, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](614, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](615, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](616, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](617, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](618, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](619, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](620, "\u7528\u4E8E\u6807\u793A\u5F53\u524D\u8868\u5355\u9879\u7684\u5185\u5BB9\uFF0C\u53EF\u9009\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](621, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](622, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](623, "\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](624, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](625, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](626, " \u7684\u53C2\u6570\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](627, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](628, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](629, " \u4E0A\u5747\u53EF\u76F4\u63A5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](630, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](631, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](632, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](633, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](634, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](635, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](636, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](637, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](638, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](639, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](640, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](641, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](642, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](643, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](644, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](645, "[nzRequired]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](647, "\u5F53\u524D\u9879\u662F\u5426\u4E3A\u5FC5\u586B\uFF0C\u4EC5\u5F71\u54CD\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](650, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](651, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](652, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](653, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](654, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](655, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](656, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](657, "[nzNoColon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](659, "\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](661, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](662, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](664, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](665, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](666, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](667, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](668, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](669, "[nzFor]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](671, "label \u6807\u7B7E\u7684 for \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](672, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](673, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](674, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](675, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](676, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](677, "h3", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](678, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](679, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](680, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](681, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](682, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](683, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](684, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](685, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](686, "\u6CE8\u610F\uFF1A\u7531\u4E8E Angular Form \u76EE\u524D\u63D0\u4F9B\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](687, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](688, "\u72B6\u6001\u53D8\u66F4\u8BA2\u9605");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](689, "\u4E0D\u5B8C\u6574\u3002\u624B\u52A8\u66F4\u6539\u8868\u5355\u72B6\u6001\u65F6\uFF0C\u4F8B\u5982 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](690, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](691, "markAsDirty");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](692, " \u540E\uFF0C\u9700\u8981\u6267\u884C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](693, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](694, "updateValueAndValidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](695, " \u901A\u77E5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](696, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](697, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](698, " \u8FDB\u884C\u72B6\u6001\u53D8\u66F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](699, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](700, "\u8868\u5355\u4E00\u5B9A\u4F1A\u5305\u542B\u8868\u5355\u57DF\uFF0C\u8868\u5355\u57DF\u53EF\u4EE5\u662F\u8F93\u5165\u63A7\u4EF6\uFF0C\u6807\u51C6\u8868\u5355\u57DF\uFF0C\u6807\u7B7E\uFF0C\u4E0B\u62C9\u83DC\u5355\uFF0C\u6587\u672C\u57DF\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](701, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](702, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](703, "\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](704, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](705, "nz-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](706, " \u7684\u53C2\u6570\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](708, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](709, " \u4E0A\u5747\u53EF\u76F4\u63A5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](710, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](711, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](712, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](713, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](714, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](715, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](716, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](717, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](718, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](719, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](720, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](721, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](722, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](723, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](724, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](725, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](726, "[nzValidateStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](727, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](728, "\u4F1A\u6839\u636E\u4F20\u5165\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](730, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](731, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](732, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](733, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](734, " \u81EA\u52A8\u751F\u6210\u6821\u9A8C\u72B6\u6001\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u72B6\u6001\uFF0C\u4E0D\u4F20\u5165\u65F6\u9ED8\u8BA4\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](736, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](737, " \u4E2D\u5305\u88F9\u7684\u7B2C\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](738, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](739, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](740, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](741, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](742, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](743, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](744, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](745, "'success' | 'warning' | 'error' | 'validating' | FormControl | NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](746, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](747, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](748, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](749, " \u4E2D\u5305\u88F9\u7684\u7B2C\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](750, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](751, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](752, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](753, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](754, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](756, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](758, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](759, "[nzHasFeedback]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](761, "\u914D\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](762, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](763, "nzValidateStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](764, " \u5C5E\u6027\u4F7F\u7528\uFF0C\u5C55\u793A\u6821\u9A8C\u72B6\u6001\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](765, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](766, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](767, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](768, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](769, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](770, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](772, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](773, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](774, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](775, "[nzExtra]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](776, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](777, "\u7528\u4E8E\u663E\u793A\u8868\u5355\u989D\u5916\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](778, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](780, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](781, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](782, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](783, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](784, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](785, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](786, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](787, "[nzSuccessTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](788, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](789, "\u6821\u9A8C\u72B6\u6001 success \u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](791, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](792, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](794, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](795, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](796, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](798, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](799, "[nzWarningTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](800, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](801, "\u6821\u9A8C\u72B6\u6001 warning \u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](802, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](803, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](804, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](806, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](807, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](808, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](809, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](810, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](811, "[nzErrorTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](812, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](813, "\u6821\u9A8C\u72B6\u6001 error \u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](814, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](815, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](816, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](817, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](818, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](820, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](822, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](823, "[nzValidatingTip]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](825, "\u6B63\u5728\u6821\u9A8C\u65F6\u63D0\u793A\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](826, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](827, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](828, "string | TemplateRef<{ $implicit: FormControl | NgModel }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](829, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](830, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](831, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](832, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](833, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](834, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](835, "[nzAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](837, "\u914D\u7F6E\u63D0\u793A\u7684\u5BF9\u8C61, \u5177\u4F53\u7528\u6CD5\u8BF7\u53C2\u8003\u793A\u4F8B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](838, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](839, "\u81EA\u52A8\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](840, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](841, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](842, "Record<string, Record<string, string>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](843, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](844, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](845, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](846, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](847, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](848, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](849, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](850, "[nzDisableAutoTips]");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](851, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](852, "\u7981\u7528\u81EA\u52A8\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](853, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](854, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](855, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](857, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](858, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](859, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](860, "h3", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](861, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](862, "nz-form-split");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](863, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](864, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](865, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](866, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](867, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](868, "\u7528\u4E8E\u663E\u793A\u5206\u9694\u7B26 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](870, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](871, "h3", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](872, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](873, "nz-form-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](874, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](875, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](876, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](877, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](878, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](879, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](881, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](882, " \u4E2D\u76F4\u63A5\u663E\u793A\u6587\u672C");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-horizontal-login")("nzLink", "components-form-demo-horizontal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/horizontal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-normal-login")("nzLink", "components-form-demo-normal-login")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/normal-login.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-register")("nzLink", "components-form-demo-register")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/register.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-advanced-search")("nzLink", "components-form-demo-advanced-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/advanced-search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-dynamic-form-item")("nzLink", "components-form-demo-dynamic-form-item")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-form-item.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-time-related-controls")("nzLink", "components-form-demo-time-related-controls")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/time-related-controls.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-validate-reactive")("nzLink", "components-form-demo-validate-reactive")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-reactive.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-validate-template")("nzLink", "components-form-demo-validate-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-auto-tips")("nzLink", "components-form-demo-auto-tips")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/auto-tips.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-validate-static")("nzLink", "components-form-demo-validate-static")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/validate-static.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-coordinated")("nzLink", "components-form-demo-coordinated")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/coordinated.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-layout")("nzLink", "components-form-demo-layout")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/layout.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzId", "components-form-demo-dynamic-rule")("nzLink", "components-form-demo-dynamic-rule")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/form/demo/dynamic-rule.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_15__.NzAffixComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorComponent, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_16__.NzAnchorLinkComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzColDirective, _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, _horizontal_login__WEBPACK_IMPORTED_MODULE_1__.NzDemoFormHorizontalLoginComponent, _normal_login__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormNormalLoginComponent, _register__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormRegisterComponent, _advanced_search__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormAdvancedSearchComponent, _dynamic_form_item__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormDynamicFormItemComponent, _time_related_controls__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormTimeRelatedControlsComponent, _validate_reactive__WEBPACK_IMPORTED_MODULE_7__.NzDemoFormValidateReactiveComponent, _validate_template__WEBPACK_IMPORTED_MODULE_8__.NzDemoFormValidateTemplateComponent, _auto_tips__WEBPACK_IMPORTED_MODULE_9__.NzDemoFormAutoTipsComponent, _validate_static__WEBPACK_IMPORTED_MODULE_10__.NzDemoFormValidateStaticComponent, _coordinated__WEBPACK_IMPORTED_MODULE_11__.NzDemoFormCoordinatedComponent, _layout__WEBPACK_IMPORTED_MODULE_12__.NzDemoFormLayoutComponent, _dynamic_rule__WEBPACK_IMPORTED_MODULE_13__.NzDemoFormDynamicRuleComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_form_index_module_ts.js.map