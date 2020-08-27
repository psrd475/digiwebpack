import React, { Component } from 'react'

export default class RequestNeedsUpdate extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="page-layout">
          <div class="container ">
            <nav aria-label="breadcrumb">
              <ol class="bg-transparent breadcrumb mb-2 p-0 small text-muted">
                <li class="breadcrumb-item"><a href="index.html">الرئيسية</a></li>
                <li class="breadcrumb-item active" aria-current="page"> طلب تسجيل وكالة السفر </li>
              </ol>
            </nav>
            <div class="page-title">
              <h1 class="h1 text-primary"> طلب تسجيل وكالة السفر </h1>
            </div>

            <div class="bg-white shadows px-4 pb-4 border" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="100">
              <div class="alert alert-danger align-items-center big-alert d-flex flex-column flex-md-row mb-3 mx-n4 p-4">
                <i class="fal fa-4x fa-file-exclamation fa-fw text-danger mr-0 mr-md-4"></i>
                <div>
                  <h3 class="mb-3">طلبك يحتاج الى تحديث بعض البيانات</h3>
                  <p class="text-muted m-0">
                    يرجي تحديث بيانات  الافرع حيث انه بالكشف عنها وجد ان بعض البيانات ناقصة وبعضها غير دقيقة  - اللوجو الخاص بالوكالة غير واضح نرجو استبداله بملف آخر عالي الجودة
                    </p>
                </div>
              </div>

              <ul class="border-bottom f-tabs mb-4  mx-n4 nav nav-tabs pb-1 sticky-top">
                <li class="nav-item" role="tablist">
                  <a class="nav-link active" href="#essential">البيانات الاساسية</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#license">بيانات الترخيص</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#branches">بيانات التواصل والفروع  </a>
                </li>
              </ul>



              <section id="essential" class="pt-5">




                <div class="row">
                  <div class="col-lg-8">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group ">
                          <label class="d-block col-form-label"> اسم وكالة السفر  </label>
                          <input type="text" readonly="" class="form-control-plaintext" value="وكالة مملكة تونس للأسفار و السياحة">
                    </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group ">
                            <label class="d-block col-form-label"> الدولة      </label>
                            <input type="text" readonly="" class="form-control-plaintext" value=" تونس ">
                    </div>
                          </div>

                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group ">
                              <label class="d-block col-form-label"> تصنيف الوكالة  </label>
                              <input type="text" readonly="" class="form-control-plaintext" value="شركة للسياحة والسفر">
                    </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group ">
                                <label class="d-block col-form-label"> الموقع الالكتروني  </label>

                                <input type="text" readonly="" class="form-control-plaintext" value="www.mycompany.com">
                          
                    </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group ">
                                  <label class="d-block col-form-label">  رقم السجل التجاري </label>
                                  <input type="text" readonly="" class="form-control-plaintext" value="43534876543">
                    </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group ">
                                    <label class="d-block col-form-label"> ارفاق ملف السجل التجاري </label>
                                    <a class="underline p-1 d-inline-block" href="#downloadfile"> شركة ام القرى للحج والعمرة.pdf </a>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group ">
                                    <label class="d-block col-form-label  ">   تاريخ انشاء السجل التجاري   </label>
                                    <input type="text" class="form-control-plaintext" value="11/5/2020">               
                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group ">
                                      <label class="d-block col-form-label  "> تاريخ انتهاء السجل التجاري     </label>
                                      <input type="text" class="form-control-plaintext" value="11/5/2020">               
                    </div>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="form-group ">
                                        <label class="d-block col-form-label">   نبذة عن وكالة السفر   </label>

                                        <textarea class="form-control-plaintext" rows="4">تمكنا نتيجة لخبرتنا السابقة في مجال السفر و السياحة أن نكتسب قاعدة للحرفاء متنامية يوما بعد يوم مما عزز عدد الزبائن و خاصة ثقتهم على مدى السنوات الماضية .  لآرائهم و بدلك تواصل مملكة تونس للأسفار و السياحة التطوير و التوسيع في عروضها ومنتجاتها.</textarea>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-3 col-md-4 mb-5 offset-lg-1">
                                  <div class="bg-white border flag-info overflow-hidden py-5 round">
                                    <span class="p-4 d-block">
                                      <img class="" src="ui/images/company-logo.jpg" alt="company logo"> 
                </span> 
            </div>
                                  </div>
                                </div>
                                <hr class="my-4 mx-n4">
                                  <h3 class="text-primary"> بيانات مالك / ملاك وكالة السفر </h3>
                                  <div class="table-responsive">
                                    <table class="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>اسم المالك</th>
                                          <th>رقم الهوية</th>
                                          <th>  رقم الجوال</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>  محمد  انيس المزروقي </td>
                                          <td> 4345352</td>
                                          <td>  2162477992  </td>
                                        </tr>
                                        <tr>
                                          <td> محمد عبد الرحمن العبيد  </td>
                                          <td> 4345352</td>
                                          <td>  3564477992  </td>
                                        </tr>
                                        <tr>
                                          <td>  اسامة محمد الداودي </td>
                                          <td> 4345352</td>
                                          <td>  654659884  </td>
                                        </tr>

                                      </tbody>

                                    </table>
                                  </div>   
</section>
                                <hr class="my-5 mx-n4">
                                  <section class="mt-5" id="license">
                                    <h3 class="text-primary"> ترخيص وزارة السياحة  </h3>
                                    <div class="row">
                                      <div class="col-lg-8">
                                        <div class="row">
                                          <div class="col-md-6">
                                            <div class="form-group ">
                                              <label class="d-block col-form-label">  رقم الترخيص    </label>
                                              <input type="text" class="form-control-plaintext" value="125654">                  
                    </div>
                                            </div>
                                            <div class="col-md-6">
                                              <div class="form-group ">
                                                <label class="d-block col-form-label"> ملف الترخيص </label>
                                                <a class="underline p-1 d-inline-block" href="#downloadfile"> file-name.pdf </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-md-6">
                                              <div class="form-group ">
                                                <label class="d-block col-form-label  "> تاريخ انشاء الترخيص  </label>
                                                <input type="text" class="form-control-plaintext" value="11/5/2020">   
                    </div>
                                              </div>
                                              <div class="col-md-6">
                                                <div class="form-group ">
                                                  <label class="d-block col-form-label  "> تاريخ انتهاء الترخيص   </label>
                                                  <input type="text" class="form-control-plaintext" value="11/5/2020">               
                    </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <hr class="my-4 mx-n4">
                                            <h3 class="text-primary"> التسجيل في  FTAV </h3>
                                            <div class="row">
                                              <div class="col-lg-8">
                                                <div class="row">
                                                  <div class="col-md-6">
                                                    <div class="form-group ">
                                                      <label class="d-block col-form-label">  رقم العضوية    </label>
                                                      <input type="text" class="form-control-plaintext" value="125654">                  
                    </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                      <div class="form-group ">
                                                        <label class="d-block col-form-label"> ملف العضوية </label>
                                                        <a class="underline p-1 d-inline-block" href="#downloadfile"> file-name.pdf </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="row">
                                                    <div class="col-md-6">
                                                      <div class="form-group ">
                                                        <label class="d-block col-form-label  "> تاريخ انشاء العضوية  </label>
                                                        <input type="text" class="form-control-plaintext" value="11/5/2020">   
                    </div>
                                                      </div>
                                                      <div class="col-md-6">
                                                        <div class="form-group ">
                                                          <label class="d-block col-form-label  "> تاريخ انتهاء العضوية   </label>
                                                          <input type="text" class="form-control-plaintext" value="11/5/2020">               
                    </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <hr class="my-4 mx-n4">
                                                    <h3 class="text-primary"> التسجيل في الجامعة التونسية لوكالات الأسفار والسياحة  </h3>
                                                    <div class="row">
                                                      <div class="col-lg-8">
                                                        <div class="row">
                                                          <div class="col-md-6">
                                                            <div class="form-group ">
                                                              <label class="d-block col-form-label">  رقم العضوية    </label>
                                                              <input type="text" class="form-control-plaintext" value="125654">                  
                    </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                              <div class="form-group ">
                                                                <label class="d-block col-form-label"> ملف العضوية </label>
                                                                <a class="underline p-1 d-inline-block" href="#downloadfile"> file-name.pdf </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div class="row">
                                                            <div class="col-md-6">
                                                              <div class="form-group ">
                                                                <label class="d-block col-form-label  "> تاريخ انشاء العضوية  </label>
                                                                <input type="text" class="form-control-plaintext" value="11/5/2020">   
                    </div>
                                                              </div>
                                                              <div class="col-md-6">
                                                                <div class="form-group ">
                                                                  <label class="d-block col-form-label  "> تاريخ انتهاء العضوية   </label>
                                                                  <input type="text" class="form-control-plaintext" value="11/5/2020">               
                    </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
</section>
                                                        <hr class="my-5 mx-n4">
                                                          <section class="mt-5" id="branches">
                                                            <h3 class="text-primary">  بيانات التواصل </h3>
                                                            <div class="row">
                                                              <div class="col-lg-8">
                                                                <div class="row">
                                                                  <div class="col-md-6">
                                                                    <div class="form-group ">
                                                                      <label class="d-block col-form-label">  رقم الهاتف   </label>

                                                                      <input type="number" class="form-control-plaintext" value="45346545"> 
                            
                    </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                      <div class="form-group ">
                                                                        <label class="d-block col-form-label">  رقم الجوال </label>

                                                                        <input type="number" class="form-control-plaintext" value="23423425">   
                          
                    </div>
                                                                      </div>
                                                                    </div>

                                                                    <div class="row">
                                                                      <div class="col-md-6">
                                                                        <div class="form-group ">
                                                                          <label class="d-block col-form-label">  رقم الفاكس </label>

                                                                          <input type="number" class="form-control-plaintext" value="234234234">  
                          
                    </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                          <div class="form-group ">
                                                                            <label class="d-block col-form-label">  البريد الالكتروني </label>

                                                                            <input type="email" class="form-control-plaintext" value="www.mycompany.com">
                          
                    </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <hr class="my-4 mx-n4">


                                                                      <h3 class="text-primary">  بيانات الفروع   </h3>
                                                                      <div class="table-responsive">
                                                                        <table class="table table-striped">
                                                                          <thead>
                                                                            <tr>
                                                                              <th>اسم الفرع</th>
                                                                              <th>المدينة</th>
                                                                              <th>الشارع</th>
                                                                              <th>رقم / اسم المبنى</th>
                                                                              <th>الاحداثيات</th>
                                                                              <th>الجوال</th>
                                                                            </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                            <tr>
                                                                              <td>فرع الشهداء</td>
                                                                              <td>صفاقس</td>
                                                                              <td>طريق العين</td>
                                                                              <td>143  الجديدة</td>
                                                                              <td>     21،434535  21،4345352</td>
                                                                              <td>05856465456</td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>فرع الشهداء</td>
                                                                              <td>صفاقس</td>
                                                                              <td>طريق العين</td>
                                                                              <td>143  الجديدة</td>
                                                                              <td>     21،434535  21،4345352</td>
                                                                              <td>05856465456</td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>فرع الشهداء</td>
                                                                              <td>صفاقس</td>
                                                                              <td>طريق العين</td>
                                                                              <td>143  الجديدة</td>
                                                                              <td>     21،434535  21،4345352</td>
                                                                              <td>05856465456</td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td>فرع الشهداء</td>
                                                                              <td>صفاقس</td>
                                                                              <td>طريق العين</td>
                                                                              <td>143  الجديدة</td>
                                                                              <td>     21،434535  21،4345352</td>
                                                                              <td>05856465456</td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </div>


                                                                      <div class="branch-map">
                                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104888.4757581263!2d10.663058829797!3d34.76151547712517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cda1486c695%3A0x22dfe0a62c50ce6f!2sSfax%2C%20Tunisia!5e0!3m2!1sen!2ssa!4v1570107555457!5m2!1sen!2ssa" width="100%" height="216" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                                                                      </div> 
</section>


                                                                    <div class="btn-group mt-5 justify-content-end">
                                                                      <div>
                                                                        <a href="Agency_Registeration_1.html" class="btn btn-primary ml-3">  تحديث الطلب </a>
                                                                      </div>
                                                                    </div>
                                                                  </div>

                                                                </div>
                                                              </div>
                                                            </div>
    )
  }
}
