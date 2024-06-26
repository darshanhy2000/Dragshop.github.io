

import * as html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { useHistory } from 'react-router-dom';
import img1 from '../../assets/img/invoice/invoice.svg';
import logo from '../../assets/img/logo.png';
import sign from '../../assets/img/invoice/sign.png';

const InvoiceOnes = () => {
  const history = useHistory();
  const [setIsPdfExporting] = React.useState(false);

  const routeChange = () => {
    history.goBack();
  };

  const exportAsPDF = () => {
    setIsPdfExporting(true); // Set the flag when exporting to PDF
    const input = document.getElementById('invoice-container');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('invoice.pdf');
      setIsPdfExporting(false); 
    });
  };
  return (
    <>

      <section className="theme-invoice-1 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="back_btn_emial">
                
              <button
                  className="theme-btn-one btn-black-overlay btn_sm"
                  onClick={routeChange}
                >
                  <i className="fa fa-arrow-left mr-2"></i>Go Back
                </button>
                <div className="buttons d-flex justify-content-end">
                  <button
                    className="theme-btn-one btn-black-overlay btn_sm ml-2"
                    onClick={exportAsPDF}
                  >
                    Export as PDF
                  </button>
                  <button className="theme-btn-one btn-black-overlay btn_sm fa-arrow-right ml-2">
                    Print
                  </button>
                </div>
                    
              </div>
              <div className="invoice-wrapper" id="invoice-container">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <div className="upper-icon">
                    <img src={img1} className="img-fluid" alt="svg"/>
                  </div>
                  <div className="row header-content">
                    <div className="col-md-6">
                        <img src={logo} className="img-fluid" alt="logo"/>
                        <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">
                          DragShop Demo Store india - 363512
                        </h4>
                        <h4 className="mb-0">support@DragShop.com</h4>
                      </div>
                    </div>
                    <div className="col-md-6 text-md-right mt-md-0 mt-4">
                      <h2>invoice</h2>
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">
                          2664  Tail Ends Road, ORADELL
                        </h4>
                        <h4 className="mb-0">New Jersey, 07649</h4>
                      </div>
                    </div>
                  </div>
                  <div className="detail-bottom">
                    <ul>
                      <li><span>issue date :</span><h4> 20 march, 2023</h4></li>
                      <li><span>invoice no :</span><h4> 908452</h4></li>
                      <li><span>email :</span><h4> user@gmail.com</h4></li>
                    </ul>
                  </div>
                </div>
                <div className="invoice-body table-responsive-md">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">description</th>
                        <th scope="col">price</th>
                        <th scope="col">hrs.</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Logo Designing</td>
                        <td>₹50</td>
                        <td>2</td>
                        <td>₹100</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>website & banner design</td>
                        <td>₹30</td>
                        <td>3</td>
                        <td>₹90</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>frontend development</td>
                        <td>₹95</td>
                        <td>1</td>
                        <td>₹95</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>backend development</td>
                        <td>₹95</td>
                        <td>1</td>
                        <td>₹95</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>SEO, Deigital marketing</td>
                        <td>₹95</td>
                        <td>1</td>
                        <td>₹95</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2"></td>
                        <td className="font-bold text-dark" colSpan="2">GRAND TOTAL</td>
                        <td className="font-bold text-theme">₹325.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="invoice-footer text-right">
                <div className="authorise-sign">
                  <img src={sign} className="img-fluid" alt="sing" />
                  <span className="line"></span>
                  <h6>Authorised Sign</h6>
                </div>
                
              </div>
            </div>
          </div>
        </div>
         </div>
      </section>
    </>
  );
};

export default InvoiceOnes;
