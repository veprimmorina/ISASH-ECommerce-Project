import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

function Warranty({ warranty }) {
  return (
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Warranty &gt; &gt; <strong>Details</strong>
                </p>
              </MDBCol>
              <MDBCol xl="3" className="float-end">
                {/* <MDBBtn
                  rippleDuration={1000}
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0"
                >
                  <MDBIcon fas icon="print" color="primary" className="me-1" />
                  Print
                </MDBBtn> */}
                <button
                  type="button"
                  class="btn btn-light text-capitalize border-0"
                >
                  Primary
                </button>

                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0 ms-2"
                >
                  <MDBIcon
                    far
                    icon="file-pdf"
                    color="danger"
                    className="me-1"
                  />
                  Export
                </MDBBtn>
                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <i className="fa fa-file-text-o"></i>
              <p className="pt-0">{warranty.length}</p>
            </MDBCol>
          </MDBContainer>
         
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Warranty length</th>
                  <th scope="col">Warranty Coverage details</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>{warranty.warrantyDescription}</td>
                  <td>{warranty.warrantyLength} Months</td>
                  <td>{warranty.warrantyCoverageDetails}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">Provided by Samsung</p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled></MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>For further information feel free to contact us at samsung@gmail.com</p>
            </MDBCol>
            <MDBCol xl="2">
              <MDBBtn
                className="text-capitalize"
                style={{ backgroundColor: "#60bdf3" }}
              ></MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Warranty;
