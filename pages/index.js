import Head from 'next/head';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { motion } from "framer-motion"
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';
import Link from 'next/link';


const useStyles = makeStyles({
  root: {
    background: '#E3F2FD',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '450px',
    cursor: 'pointer'
  }
})

function Index() {
  const classes = useStyles();

  let data = [
    {
      "id": "ghost-whey-x-chips-ahoy",
      "name": "Ghost Whey X Chips Ahoy",
      "details": "We've said it before and we will say it again, nothing beats the real thing. With years of R&D and REAL CHIPS AHOY!® cookie pieces in every scoop, this flavor is second to none.",
      "price": "$39.99",
      "image": "https://cdn.shopify.com/s/files/1/2060/6331/products/image.png?v=1571331841"
    },
    {
      "id": "ghost-whey-vegan",
      "name": "GHOST® Vegan Protein",
      "details": "GHOST Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
      "price": "$49.99",
      "image": "https://cdn.shopify.com/s/files/1/2060/6331/products/Vegan.png?v=1574882358"
    }
  ]  
  return (
    <motion.div className={classes.root} style={{minHeight: '100vh'}} exit={{opacity: 0}}>
      <Head>
        <title>Product Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: .2}}> 
    <Grid container>
      <Grid item container xs={12} alignItems="center" justify="space-around">
          <Box>
            <motion.div motion initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut" }}>
            <h1>Select A Product</h1>
            </motion.div>
          </Box>
          <Grid item container xs={12} alignItems="center" justify="center" >
            {data.map(item => (
              <Box p={6} key={item.id}>
                <Grid item container alignItems="center" justify="center" >
                  <motion.div motion initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", delay: .2 }}>
                    <h2>{item.name}</h2>
                  </motion.div>
                </Grid>
                <Link href={'/product/[id]'} as={`/shop/product/${item.id}`}>
                  <motion.img className={classes.image} whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={item.image} />
                </Link>
                <Grid item container alignItems="center" justify="center">
                  <motion.div motion initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut" }}>
                  <h1>{item.price}</h1>
                  </motion.div>
                </Grid>
              </Box>
            ))}
          </Grid>
      </Grid>
    </Grid>
    </motion.div>
    <style jsx global>{`
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap");
    html,
    body {
      padding: 0;
      margin: 0;
      height: 100vh;
      min-height: -moz-available; /* WebKit-based browsers will ignore this. */
      min-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
      min-height: fill-available;
      font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    * {
      box-sizing: border-box;
    }
  `}</style>
    </motion.div>
  )
}

export default Index