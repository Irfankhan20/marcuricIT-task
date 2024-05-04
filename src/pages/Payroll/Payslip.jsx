import React from "react";
import PageTitle from "../../components/PageTitle";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import { invoiceData } from "./data";

const Payslip = () => {
  return (
    <div>
      <h2>Payslip</h2>
      <p>Dashboard / Payslip</p>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-sm-end mt-5">
                  <address className="">
                    <h3>PAYSLIP {invoiceData.payslip}</h3>
                    <h5>Salary Month: {invoiceData.salary_month}</h5>
                  </address>
                </div>
                <h4 className="text-center text-decoration-underline">
                  PAYSLIP FOR THE MONTH OF FEB 2019
                </h4>
                <div className="float-sm-start mt-5">
                  <img
                    className="mb-3"
                    src="https://i.ibb.co/z8XX9xp/download.png"
                    alt=""
                  />
                  <dt>Dremguy's Technologies</dt>
                  <dt>3864 Quiet Valley Lane,</dt>
                  <dt>Sherman Oaks,CA,91403</dt>
                  <br />
                  <h4 className="m-0 d-print-none">{invoiceData.Employee}</h4>

                  <dd className="col-sm-9 fw-normal">
                    {invoiceData.profession}
                  </dd>
                  <dl className="row mb-2 ">
                    <dt className="col-sm-3  fw-normal">Employee ID:</dt>
                    <dd className="col-sm-9 fw-normal">
                      {invoiceData.invoice_id}
                    </dd>
                    <dt className="col-sm-3 fw-normal">Joining Date :</dt>
                    <dd className="col-sm-9 fw-normal">
                      {invoiceData.joining_date}
                    </dd>
                  </dl>
                </div>
              </div>

              <Row className="mt-4 fw-bolder fs-3">
                <Col md={6}>Earnings</Col>

                <Col md={6}>
                  <div className="text-md-end">
                    <h6 className="fw-normal  fw-bolder fs-3">Deductions</h6>
                  </div>
                </Col>
              </Row>

              {/* <Row>
                <Col sm={6}>
                  <div className="clearfix pt-5">
                    <h6 className="text-muted">Notes:</h6>
                    <small className="text-muted">{invoiceData.notes}</small>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="float-end mt-4">
                    <p>
                      <span className="fw-medium">Sub-total :</span>
                      <span className="float-end">
                        ${invoiceData.sub_total}
                      </span>
                    </p>
                    <p>
                      <span className="fw-medium">Discount (10%) :</span>
                      <span className="float-end">
                        {" "}
                        &nbsp;&nbsp;&nbsp; ${invoiceData.discount}
                      </span>
                    </p>
                    <h3>${invoiceData.total} USD</h3>
                  </div>
                  <div className="clearfix"></div>
                </Col>
              </Row> */}

              <div className="d-flex flex-row gap-5">
                <div className="w-50">
                  <Card>
                    <Card.Body>
                      <div className="table-responsive">
                        <Table className="table mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Basic Salary</th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                              <th scope="col">{invoiceData.Basic_salary}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* tr1 */}
                            <tr>
                              <th scope="row">House Rent Allowance(H.R.A.)</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.House_rent_allowance}</td>
                            </tr>
                            {/* tr2 */}
                            <tr>
                              <th scope="row">Conveyance</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.conveyance}</td>
                            </tr>
                            {/* tr3 */}
                            <tr>
                              <th scope="row">Other Allowance</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.other_allowance}</td>
                            </tr>
                            {/* tr4 */}
                            <tr>
                              <th scope="row">Total Earnings</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.total_earnings}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <div className="w-50">
                  <Card>
                    <Card.Body>
                      <div className="table-responsive">
                        <Table className="table mb-0">
                          <thead>
                            <tr>
                              <th scope="col">
                                Tax Deducted at Source(T.D.S.)
                              </th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                              <th scope="col">
                                {invoiceData.tax_deducted_at_source}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* tr1 */}
                            <tr>
                              <th scope="row">Provident Fund</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.provident_fund}</td>
                            </tr>
                            {/* tr2 */}
                            <tr>
                              <th scope="row">ESI</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.esi}</td>
                            </tr>
                            {/* tr3 */}
                            <tr>
                              <th scope="row">Loan</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.loan}</td>
                            </tr>
                            {/* tr4 */}
                            <tr>
                              <th scope="row">Total Deductions</th>
                              <td>{}</td>
                              <td>{}</td>
                              <td>{invoiceData.total_deductions}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              <p className="fs-4">
                <span className="fw-bold">Net Salary: $$59698 </span>
                (Fifty nine thousand six hundred and ninety eight only.)
              </p>

              <div className="mt-5 mb-1">
                <div className="text-end d-print-none">
                  <Link
                    to="#"
                    onClick={() => {
                      window.print();
                    }}
                    className="btn btn-primary me-1"
                  >
                    <i className="uil uil-print me-1"></i> Print
                  </Link>
                  <Link to="#" className="btn btn-info">
                    Submit
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Payslip;
