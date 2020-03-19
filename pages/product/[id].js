import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { motion } from "framer-motion"
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Chip from '@material-ui/core/Chip';
import { Box } from '@material-ui/core';
import { useRouter } from 'next/router'
import Head from 'next/head'
const useStyles = makeStyles({
  root: {
    background: '#E3F2FD',
    height: '100vh',
  },
  base: {
    background: '#BBDEFB',
    height: '100vh'
  },
  back: {
    position: 'absolute',
    right: 25,
    top: 25
  },
  image: {
    width: '80%',
  }
})

const Product = ({product}) => {
  const classes = useStyles()
  return (
    
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <Head>
        <title>{product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: .2}} >
      <Grid container >
        <Button color="primary" className={classes.back} href="/shop" >
          <ArrowBackIcon /> Back to Products
        </Button>
        <Grid item container className={classes.base} lg={6} xs={12} alignItems="center" justify="center">
          <motion.img whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.2 }} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{delay: .2}} className={classes.image} src={product.image} />
        </Grid>
        <Grid item container className={classes.root} xs={12} lg={6} alignItems="center" justify="center">
          <Box p={4}>
            <motion.div motion initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut" }}>
              <p>Protein</p>
              <h1>{product.name}</h1>
              <p>{product.details}</p>
              <Grid item container justify="space-between" lg={5} xs={6}>
                <Chip label="Soy Free" color="primary" variant="outlined" />
                <Chip label="Gluten Free" color="primary" variant="outlined" />
              </Grid>
              <Grid item container xs={12} justify="flex-end">
                <h1>{product.price}</h1>
              </Grid>
              <Grid item container>
                <Button variant="contained" color="primary">
                  Add To Cart
              </Button>
              </Grid>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
      </motion.div>
      <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap");
      html,
      body {
        padding: 0;
        margin: 0;
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

Product.getInitialProps = async (ctx) => {
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
  let product = data.find(i => i.id == ctx.query.id);
  return {product}
}


export default Product