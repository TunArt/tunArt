import { useEffect,useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../theme";
//import { mockDataTeam } from "../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../components/Header";
import axios from "axios"

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const fetchingData = () => {
    axios
      .get("http://localhost:3000/api/artists/getArtists")
      .then((result) => {
        console.log(result)
        setData(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchingData();
  }, []);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "bio",
      headerName: "Bio",
     // type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
   {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
  
 
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: () => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              // access === "admin"
                 colors.greenAccent[600]
                //: access === "manager"
                // ? colors.greenAccent[700]
                // : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {/* {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />} */}
             <AdminPanelSettingsOutlinedIcon />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
             Artist
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="ARTIST" subtitle="Managing the Artist Members" />
   <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={data} columns={columns}  components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default User;
