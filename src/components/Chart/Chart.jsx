import '../../App.css';
import { useReportChart } from '../../hooks/useReportChart';
import css from './Chart.module.css';
import { useSelectedDate } from "../../hooks/useSelectedDate"

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from 'recharts';
import { useEffect, useState } from 'react';

export function Chart({ activeSheet, selectedCategory}) {
  const { summaryReportData } = useReportChart();
  const sumaryData = summaryReportData(activeSheet);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { selectedDate } = useSelectedDate();

  const filteredData = sumaryData.filter(transaction => {
      
    const date = new Date(transaction.date);
    const transactionMonthYear = date.toISOString().slice(0, 7);
    const selectedMonthYear = `${selectedDate.year}-${String(selectedDate.monthIndex + 1).padStart(2, '0')}`;

    const isSameMonth = transactionMonthYear === selectedMonthYear;
    const isSameCategory = transaction.category === selectedCategory;

    return isSameMonth && isSameCategory;
  })

  const groupedData = filteredData.reduce((acc, { description, amount, date, category }) => {
    const existing = acc.find((item) => item.description === description);
    if (existing) {
      existing.amount += amount;
    } else {
      acc.push({ description, amount, date, category });
    }
    return acc;
  }, []);

  const sortedData = groupedData.sort((a, b) => b.amount - a.amount).slice(0, 6);

  return (
    <div>
      {sortedData.length > 0 && (
        <div className={css.box}>
          <ResponsiveContainer width="100%" height="100%" className={css.chart}>
            <BarChart data={sortedData} margin={{
              top: isMobile ? 10 : 40,
              right: isMobile ? 10 : 0,
              left: isMobile ? 10 : 0,
              bottom: isMobile ? 0 : 20
            }} layout={isMobile ? "vertical" : "horizontal"}>
              <CartesianGrid vertical={false} horizontal={isMobile ? false : true} />
              {isMobile ? (
                <>
                  <XAxis type="number" hide={true} />
                  <YAxis type="category" dataKey="description" axisLine={false} tickSize={0} tickMargin={10} mirror={true} tick={{ dx: -15, dy: -16 }} />
                </>
              ) : (
                <>
                  <XAxis dataKey="description" axisLine={{ stroke: '#ccc' }} tickSize={0} tickMargin={10} />
                  <YAxis hide={true} />
                </>
              )}
              <Bar
                dataKey="amount"
                fill="#ff751d"
                radius={isMobile ? [0, 10, 10, 0] : [10, 10, 0, 0]}
                barSize={isMobile ? 15 : 38}
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-in"
              >
                {sortedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? '#ff751d' : '#ffdac0'}
                  />
                ))}
                {isMobile ? (
                  <LabelList
                    dataKey="amount"
                    position="right"
                    fill="#5e6373"
                    dx={-15}
                    dy={-14}
                  />
                ) : (
                  <LabelList
                    dataKey="amount"
                    position="top"
                    fill="#5e6373"
                    dx={0}
                    dy={0}
                  />
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>)}
    </div>
  );
}

