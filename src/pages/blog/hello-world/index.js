import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/Layout"
import WithCustomScrollbar from "../../../components/WithCustomScrollbar"
import BlogTitle from "../../../components/blog/BlogTitle"
import BlogPostWrapper from "../../../components/blog/BlogPostWrapper"

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "blog/hello-world/header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <WithCustomScrollbar sidePadded topPadded>
        <BlogPostWrapper>
          <header>
            <BlogTitle underlined title="Hello World!" />
            <Img
              className="w-full mx-auto"
              fluid={data.header.childImageSharp.fluid}
            />
            <p className="text-center text-xl my-5 font-quicksand">
              Photo by{" "}
              <a href="https://unsplash.com/@miriamemiles?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Miriam Miles
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/hello-world?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
          </header>

          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              imperdiet felis ullamcorper, vehicula arcu a, tempor tortor. Fusce
              congue, dolor eget vulputate laoreet, mi odio fermentum elit, ac
              tempor est lectus in nisi. Nam dignissim elementum dui, vitae
              rutrum nibh ullamcorper at. Donec aliquam tempor felis, ut
              elementum sapien lacinia a. Integer dictum sodales augue eget
              accumsan. Etiam et dictum est. In hac habitasse platea dictumst.
              Sed eget lorem placerat, ultricies nunc sed, tristique nisl.
              Maecenas sit amet arcu risus.
            </p>
          </section>

          <section>
            <p>
              Suspendisse ut metus aliquet, vehicula ipsum ullamcorper, rhoncus
              tellus. Duis maximus nisl nisi, venenatis porta nisi rutrum sed.
              Sed a est suscipit, rhoncus felis eget, suscipit nibh. Quisque in
              elit quam. Maecenas hendrerit, libero quis hendrerit molestie,
              nisi dolor convallis risus, a elementum nibh nunc in orci. Nullam
              tempor venenatis purus, vel porttitor nisi varius bibendum. In mi
              ipsum, placerat nec ultrices non, volutpat vel nisi. Curabitur id
              lacus at enim viverra tincidunt eget non felis. In nisl sapien,
              porttitor dictum pellentesque eget, vestibulum id dui. Suspendisse
              sit amet dolor ultrices, posuere odio quis, viverra purus.
            </p>
          </section>

          <section>
            <BlogTitle
              title="Hello World! abskjfabsfika ab kasbfias kaefiua kjasghfa labfiuaf aklfiusfas fkasgfiasbfafksagf  ajkfasi"
              isSubtitle
            />
            <p>
              Aliquam eu convallis est. Sed tempor lectus sed quam blandit
              posuere. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis finibus rutrum vestibulum.
              Cras nec justo mauris. Sed vulputate porttitor faucibus. Ut auctor
              facilisis eleifend. Donec scelerisque condimentum orci, sed mattis
              tellus aliquet nec. In ut odio egestas, vulputate ante nec,
              egestas leo. Ut id elit sit amet libero ullamcorper blandit.{" "}
              <a href="https://google.com">Click here!</a>
              Nullam id eros vel mauris venenatis commodo in sit amet mi.
              Praesent placerat ullamcorper rutrum. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
              vulputate auctor augue, vitae imperdiet eros. In eu lobortis urna,
              id vestibulum dui.
            </p>
          </section>

          <section>
            <p>
              Curabitur tempus urna nulla. Aenean a interdum erat, vel iaculis
              diam. Vivamus a lorem id magna eleifend vehicula eget quis tortor.
              Proin ornare blandit justo, ac hendrerit ante porttitor pharetra.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed interdum ullamcorper augue nec
              commodo. Donec convallis in massa iaculis bibendum. Pellentesque
              mollis dolor in libero efficitur, eget condimentum urna bibendum.
              Suspendisse sed accumsan nunc. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </section>

          <section>
            <p>
              Morbi in felis eget enim tristique aliquam sed quis lorem. Sed
              gravida tincidunt ex, id rhoncus ipsum sollicitudin vel. Quisque
              vitae lorem aliquam massa vehicula faucibus. Donec facilisis erat
              non placerat condimentum. Nullam condimentum a nulla in
              pellentesque. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur rutrum diam
              nibh, sit amet auctor nisl hendrerit at. Maecenas non dapibus
              risus, ultrices lacinia urna. Aliquam gravida dolor nec odio
              pharetra, ut mollis elit porttitor. Curabitur ac bibendum ante. Ut
              efficitur ligula et mauris molestie aliquet. Sed eget placerat
              dolor. Etiam euismod ultricies dolor sit amet pretium. Fusce
              cursus, metus vitae rutrum vehicula, enim mauris blandit ligula,
              ac lobortis purus sem eget tellus. Aliquam a porttitor risus.
            </p>
          </section>
        </BlogPostWrapper>
      </WithCustomScrollbar>
    </Layout>
  )
}

export default BlogPost
