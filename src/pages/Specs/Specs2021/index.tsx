import DefaultLayout from '../../layouts/default';
import MarkdownIt from 'markdown-it';
import './index.css';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const md = new MarkdownIt({ html: true, linkify: true });

const getTimeDifferenceString = (now: Date, start: Date): string => {
  const dms = start.getTime() - now.getTime();
  const ds = Math.floor(dms / 1000);
  const seconds = ds % 60;
  const minutes = Math.floor(ds / 60) % 60;
  const hours = Math.floor(ds / 3600) % 24;
  let mstr = `${minutes}`;
  let sstr = `${seconds}`;
  let hstr = `${hours}`;
  if (seconds < 10) {
    sstr = `0${sstr}`;
  }
  if (minutes < 10) {
    mstr = `0${minutes}`;
  }
  if (hours < 10) {
    hstr = `0${hours}`;
  }
  return `${hstr}:${mstr}:${sstr}`;
};

const Specs2021Page = () => {
  const [clock, setClock] = useState('');
  const [content, setContent] = useState('');
  const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      page: {
        backgroundColor: '#00AFBD',
      },
      splash: {
        backgroundColor: '#00AFBD',
      },
    });
  });
  const classes = useStyles();
  useEffect(() => {
    const url = `/specs2021.md`;
    axios.get(url).then((res) => {
      setContent(md.render(res.data));
      md.parse(res.data, '').forEach((token) => {
        if (token.type === 'html_block') {
          if (token.content.slice(1, 3) === 'h2') {
            // console.log(token.content);
          }
        }
      });
      const h2elems = document.getElementsByTagName('h2');
      for (let i = 0; i < h2elems.length; i++) {
        h2elems[i].className =
          'MuiTypography-root MuiTypography-h2 MuiTypography-colorTextPrimary';
      }
      const h3elems = document.getElementsByTagName('h3');
      for (let i = 0; i < h3elems.length; i++) {
        const href = h3elems[i].textContent;
        h3elems[i].innerHTML += `<span class="anchor" id="${href}"></span>`;
        h3elems[i].className =
          'MuiTypography-root MuiTypography-h3 MuiTypography-colorTextPrimary';
      }
      const h4elems = document.getElementsByTagName('h4');
      for (let i = 0; i < h4elems.length; i++) {
        const href = h4elems[i].textContent;
        h4elems[i].innerHTML += `<span class="anchor" id="${href}"></span>`;
        h4elems[i].className =
          'MuiTypography-root MuiTypography-h4 MuiTypography-colorTextPrimary';
      }
      const pelems = document.getElementsByTagName('p');
      for (let i = 0; i < pelems.length; i++) {
        pelems[i].className =
          'MuiTypography-root MuiTypography-p MuiTypography-colorTextPrimary';
      }
    });
  }, []);
  const startDate = new Date('2021-06-30T18:00:00-0800');
  useEffect(() => {
    const timer = setInterval(() => {
      setClock(getTimeDifferenceString(new Date(), startDate));
    }, 1000);
    setClock(getTimeDifferenceString(new Date(), startDate));
    console.log("nice try, but specs aren't in the html");
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DefaultLayout>
      <div className={`${classes.page} Specs2021Page`}>
        <Typography variant="h2"></Typography>

        {/* <ThemeProvider theme={theme}> */}
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {new Date().getTime() < startDate.getTime() && (
          <div className="countdown">{clock}</div>
        )}
        {/* </ThemeProvider> */}
      </div>
    </DefaultLayout>
  );
};

export default Specs2021Page;
