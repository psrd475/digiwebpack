import React, { Component } from 'react'

export default class Sitemap extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="page-layout">
          <div class="container ">
            <nav aria-label="breadcrumb">
              <ol class="bg-transparent breadcrumb mb-2 p-0 small text-muted">
                <li class="breadcrumb-item"><a href="index.html">الرئيسية</a></li>
                <li class="breadcrumb-item active" aria-current="page"> خريطة الموقع </li>
              </ol>
            </nav>
            <div class="page-title">
              <h1 class="h1 text-primary"> خريطة الموقع </h1>
            </div>
            <div class="row">
              <div class="col-md-4">
                <ul class="list-group">
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="login.html">Login sample  <i class="fal fa-fw fa-arrow-right"></i></a></li>
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="layout.html">Layout sample   <i class="fal fa-fw fa-arrow-right"></i></a></li>
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="register.html">Register sample   <i class="fal fa-fw fa-arrow-right"></i></a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="list-group">
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Agency_Registeration_1.html">Agency Registeration <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Agency_Profile.html">Agency Profile <i class="fal fa-fw fa-arrow-right"></i></a></li>
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="program_details.html">Program Details   <i class="fal fa-fw fa-arrow-right"></i></a></li>
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Search_results.html"> Search Results  <i class="fal fa-fw fa-arrow-right"></i></a></li>
                  <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Program_Booking_1.html"> Program Booking  <i class="fal fa-fw fa-arrow-right"></i></a></li>
                </ul>
              </div>
            </div>
            <hr class="my-4">
              <h3>  Admin Pages</h3>
              <div class="row">
                <div class="col-md-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="request_list.html">  Manage Requests <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="view_request.html">  View Request <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Manage_Travel_Agencies.html">  Manage Travel Agencies  <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="view_travel_agency.html">  View Travel Agency  <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Agency_Profile.html">  Travel Agency Profile  <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="Edit_Agency_Profile.html">  Edit Travel Agency Profile  <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="request_needs_update.html">  Request Needs update <i class="fal fa-fw fa-arrow-right"></i> </a></li>
                    <li class="list-group-item list-group-item-action"><a class="d-flex justify-content-between align-items-center" href="request_with_cancel.html">  Request details with cancel <i class="fal fa-fw fa-arrow-right"></i> </a></li>

                  </ul>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
