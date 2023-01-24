import DefaultLayout from '../../layouts/default';
import MarkdownIt from 'markdown-it';
import './index.css';
import {
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
const md = new MarkdownIt({ html: true, linkify: true });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTimeDifferenceString = (now: Date, start: Date): string => {
  const dms = start.getTime() - now.getTime();
  const ds = Math.floor(dms / 1000);
  const seconds = ds % 60;
  const minutes = Math.floor(ds / 60) % 60;
  const hours = Math.floor(ds / 3600);
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

const getSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/gi, '')
    .replace(/ /g, '-');
};

const SpecsS2Page = React.memo(() => {
  const [content, setContent] = useState('');
  const [h3s, setH3s] = useState<{ text: string; href: string; el: any }[]>([]);
  const [h3Active, setH3Active] = useState(0);
  const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
      page: {
        backgroundColor: '#2c2e33',
      },
      splash: {
        backgroundColor: '#00AFBD',
      },
    });
  });
  const classes = useStyles();

  // countdown timer
  const [clock, setClock] = useState('');
  // const [startDate] = useState(new Date('2023-01-26T18:00:00-0800'));
  const [startDate] = useState(new Date('2022-01-24T19:30:00.000Z'));
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

  useEffect(() => {
    if (new Date().getTime() >= startDate.getTime()) {
      const url =
        'https://raw.githubusercontent.com/Lux-AI-Challenge/Lux-Design-S2/main/specs.md';
      axios.get(url).then((res) => {
        console.log(res);
        res.data = res.data.replace(/\n#### /g, '\n##### ');
        res.data = res.data.replace(/\n### /g, '\n#### ');
        res.data = res.data.replace(/\n## /g, '\n### ');
        res.data = res.data.replace(/\n# /g, '\n## ');
        res.data = res.data.replace(/# /, '## ');
        // res.data = res.data.replace(/\n## /g, '\n###')
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
        const h3s: any[] = [];
        for (let i = 0; i < h3elems.length; i++) {
          const href = getSlug(h3elems[i].textContent!);
          h3elems[i].innerHTML += `<span class="anchor" id="${href}"></span>`;
          h3elems[i].className =
            'MuiTypography-root MuiTypography-h3 MuiTypography-colorTextPrimary';
          h3s.push({ text: h3elems[i].textContent, href, el: h3elems[i] });
          // h3elems[i].previousElementSibling;
        }
        setH3s(h3s);
        document.addEventListener(
          'scroll',
          () => {
            for (let i = 0; i < h3s.length - 1; i++) {
              const h3 = h3s[i + 1];
              if (h3.el.previousElementSibling) {
                if (isInViewport(h3.el.previousElementSibling)) {
                  setH3Active(i);
                  break;
                }
              }
            }
          },
          {
            passive: true,
          }
        );
        const h4elems = document.getElementsByTagName('h4');
        for (let i = 0; i < h4elems.length; i++) {
          const href = getSlug(h4elems[i].textContent!);
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
    }
  }, [startDate]);

  function isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const smallSize = useMediaQuery('(max-width: 768px)');
  return (
    <DefaultLayout>
      <div className={`${classes.page} SpecsPage`}>
        <Typography variant="h2"></Typography>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {new Date().getTime() < startDate.getTime() ? (
          <div className="countdown">{clock}</div>
        ) : (
          <div className="container">
            <Grid container spacing={4} className="specs-grid">
              {!smallSize && (
                <Grid item xs={2}>
                  <List
                    className="toc-bar"
                    component="nav"
                    aria-label={h3s.map((h3) => h3.text).join(' ')}
                  >
                    {h3s.map((h3, i) => {
                      return (
                        <HashLink
                          to={`#${h3.href}`}
                          className={`toc-item ${h3Active === i && 'active'}`}
                          key={h3.text}
                        >
                          <ListItem button>
                            <ListItemText
                              className="toc-text"
                              primary={h3.text}
                            />
                          </ListItem>
                        </HashLink>
                      );
                    })}
                  </List>
                </Grid>
              )}
              <Grid item xs={smallSize ? 12 : 10}>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
});

export default SpecsS2Page;
