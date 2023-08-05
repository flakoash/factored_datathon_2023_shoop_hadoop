import { useCallback, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, TextField, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import { OverviewOpinions } from "src/sections/overview/overview-opinions";

console.log(useCallback);

const now = new Date();

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
  {
    value: "los-angeles",
    label: "Los Angeles",
  },
];

const Page = () => {
  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const [values, setValues] = useState({
    firstName: "Demo",
    lastName: "Datathon",
    email: "demo@datathon.com",
    phone: "",
    state: "los-angeles",
    country: "USA",
  });

  return (
    <>
      <Head>
        <title>Datathon DEMO - Shoop Hadoop</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="$24k" />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="1.6k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <OverviewOpinions
                orders={[
                  {
                    rank: "1",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "2",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "3",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "4",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "5",
                    value: "good book",
                    num: "123",
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <OverviewOpinions
                orders={[
                  {
                    rank: "1",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "2",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "3",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "4",
                    value: "good book",
                    num: "123",
                  },
                  {
                    rank: "5",
                    value: "good book",
                    num: "123",
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestOrders
                orders={[
                  {
                    id: "f69f88012978187a6c12897f",
                    ref: "DEV1049",
                    amount: 30.5,
                    customer: {
                      name: "Ekaterina Tankova",
                    },
                    createdAt: 1555016400000,
                    status: "pending",
                  },
                  {
                    id: "9eaa1c7dd4433f413c308ce2",
                    ref: "DEV1048",
                    amount: 25.1,
                    customer: {
                      name: "Cao Yu",
                    },
                    createdAt: 1555016400000,
                    status: "delivered",
                  },
                  {
                    id: "01a5230c811bd04996ce7c13",
                    ref: "DEV1047",
                    amount: 10.99,
                    customer: {
                      name: "Alexa Richardson",
                    },
                    createdAt: 1554930000000,
                    status: "refunded",
                  },
                  {
                    id: "1f4e1bd0a87cea23cdb83d18",
                    ref: "DEV1046",
                    amount: 96.43,
                    customer: {
                      name: "Anje Keizer",
                    },
                    createdAt: 1554757200000,
                    status: "pending",
                  },
                  {
                    id: "9f974f239d29ede969367103",
                    ref: "DEV1045",
                    amount: 32.54,
                    customer: {
                      name: "Clarke Gillebert",
                    },
                    createdAt: 1554670800000,
                    status: "delivered",
                  },
                  {
                    id: "ffc83c1560ec2f66a1c05596",
                    ref: "DEV1044",
                    amount: 16.76,
                    customer: {
                      name: "Adam Denisov",
                    },
                    createdAt: 1554670800000,
                    status: "delivered",
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;