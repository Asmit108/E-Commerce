import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import './Dashboard.css';

const Dashboard = () => {
  const role = localStorage.getItem("role");

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
        ],
      },
    ],
  };

  return (
    <>
      {(role == "ADMIN") ?(
        <div className="dashboard-container">
          <div className="header">
            <h1>Welcome to the Dashboard</h1>
          </div>
          <div className="content">
            <div className="card">
              <h2>Users</h2>
              <p>Number of Users: 150</p>
            </div>
            <div className="card">
              <h2>Products</h2>
              <p>Number of Products: 75</p>
            </div>
            <div className="card">
              <h2>Orders</h2>
              <p>Number of Orders: 320</p>
            </div>
          </div>
          <div className="charts">
            <div className="chart-card">
              <h3>Sales Over Time</h3>
              <Line data={lineChartData} />
            </div>
            <div className="chart-card">
              <h3>Product Votes</h3>
              <Bar data={barChartData} />
            </div>
            <div className="chart-card">
              <h3>Sales Distribution</h3>
              <Pie data={pieChartData} />
            </div>
          </div>
          <div className="footer">
            <p>Dashboard Footer</p>
          </div>
        </div>
      ):(<div className="access-denied-container">
        <div className="access-denied-message">
          <h2>Access Denied</h2>
          <p>You do not have permission to access this page.</p>
        </div>
      </div>)}
    </>
  );
}

export default Dashboard;
