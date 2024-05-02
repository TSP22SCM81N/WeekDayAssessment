//this component has the Filter options like
//Role, Number of Employee, Experience, Minimum base pay, Remote and Search by Company with various MenuItem.
//designed using @material-ui/core

import React, { useState } from "react";
import { Select, MenuItem, TextField, Button, Grid } from "@material-ui/core";

const Search = () => {
  const [selectedValues, setSelectedValues] = useState({
    roles: "",
    employee: "",
    experience: "",
    pay: "",
    remote: "",
    company: "",
  });

  const handleClearAll = () => {
    setSelectedValues({
      roles: "",
      employee: "",
      experience: "",
      pay: "",
      remote: "",
      company: "",
    });
  };

  const handleFilter = () => {
    
  }

  return (
    <div className="searchDiv bg-greyIsh rounded-[10px] p-4 md:p-8">
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Select
              variant="outlined"
              fullWidth
              name="roles"
              value={selectedValues.roles}
              onChange={(e) =>
                setSelectedValues({ ...selectedValues, roles: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Roles
              </MenuItem>
              <MenuItem value="Software developer">Software developer</MenuItem>
              <MenuItem value="UI/UX Developer">UI/UX Developer</MenuItem>
              <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              variant="outlined"
              fullWidth
              name="employee"
              value={selectedValues.employee}
              onChange={(e) =>
                setSelectedValues({ ...selectedValues, employee: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Number of Employees
              </MenuItem>
              <MenuItem value="1-10">1-10</MenuItem>
              <MenuItem value="11-20">11-20</MenuItem>
              <MenuItem value="21-50">21-50</MenuItem>
              <MenuItem value="51-100">51-100</MenuItem>
              <MenuItem value="101-200">101-200</MenuItem>
              <MenuItem value="201-500">201-500</MenuItem>
              <MenuItem value="500+">500+</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              variant="outlined"
              fullWidth
              name="experience"
              value={selectedValues.experience}
              onChange={(e) =>
                setSelectedValues({ ...selectedValues, experience: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Experience
              </MenuItem>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((exp) => (
                <MenuItem key={exp} value={exp}>{exp}</MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              variant="outlined"
              fullWidth
              name="pay"
              value={selectedValues.pay}
              onChange={(e) =>
                setSelectedValues({ ...selectedValues, pay: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Minimum Base Pay
              </MenuItem>
              {[0, 10, 20, 30, 40, 50, 60, 70].map((pay) => (
                <MenuItem key={pay} value={`${pay}L`}>{`${pay}L`}</MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              variant="outlined"
              fullWidth
              name="remote"
              value={selectedValues.remote}
              onChange={(e) =>
                setSelectedValues({ ...selectedValues, remote: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Remote
              </MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="In-Office">In-Office</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Search By Company"
              value={selectedValues.company}
              onChange={(e) =>
                setSelectedValues({ ...selectedValues, company: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Button
          style={{backgroundColor:"lightblue", marginTop:'10px', width:'150px'}}
          variant="contained"
          onClick={handleClearAll}
        >
          Clear Filter
        </Button>
        <Button
          style={{backgroundColor:"lightblue",marginLeft:'10px', marginTop:'10px', width:'150px'}}
          variant="contained"
          onClick={handleFilter}
        >
          Apply Filter
        </Button>
      </form>
    </div>
  );
};

export default Search;
