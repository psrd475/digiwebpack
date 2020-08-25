import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="page-layout">
          <div class="container ">
            <nav aria-label="breadcrumb">
              <ol class="bg-transparent breadcrumb mb-2 p-0 small text-muted">
                <li class="breadcrumb-item"><a href="index.html">الرئيسية</a></li>
                <li class="breadcrumb-item active" aria-current="page"> صفحة داخلية </li>
              </ol>
            </nav>
            <div class="page-title">
              <h1 class="h1 text-primary"> صفحة داخلية </h1>
            </div>
            <div class="pt-5 text-center">
              <img width="300" src="ui/images/under-const.svg" alt="under construction" style=" opacity: .8; " class="mb-5">
                <h3 class="text-muted">الصفحة تحت الانشاء</h3> 
          </div>
            </div>
          </div>
        </div>
    )
  }
}
