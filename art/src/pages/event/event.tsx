import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import Footer from "../MainPage/footer/footer";

function ResponsiveCardList() {
    
    const [posts, setPosts] = useState<Array<{image: string, title: string, description: string}>>( [
      {
          image:
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
          title: "5 Easy Tips That Will Make Your Latte Art Flourish",
          description:
              "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
      },
      {
          image:
              "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
          title: "Coffee Roasting Basics: Developing Flavour by Roasting",
          description:
              "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
      },
      {
          image:
              "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
          title: "Latte vs. Flat White - What is the Difference?",
          description:
              "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
      },
      {
          image:
              "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
          title: "Creating the Perfect Espresso Recipe",
          description:
              "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
      },
  ] );
    useEffect(()=>{
      axios.get("http://localhost:3000/api/event/getAll").then((res)=>{
        console.log(res.data)
      })
    },[])
    function trimText(text: string, maxLength: number) {
      if (text.length > maxLength) {
          return text.slice(0, maxLength) + "...";
      } else {
          return text;
      }
  }
  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-black-100 py-8">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <h1 className="text-4xl font-bold text-orange-600 mb-8 mt-10 text-center transition duration-500 ease-in-out transform hover:text-blue-600">
  Welcome to Our Events
</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.map((post) => (
                <div key={post.title} className="bg-white shadow overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <img
                        className="w-full h-48 object-cover"
                        src={post.image}
                        alt={post.title}
                    />

                    <div className="px-6 py-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-700 text-base">{trimText(post.description, 100)} <a href="#" className="text-blue-600 hover:underline">Read More</a></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
<Footer/>
</>
);
}



export default ResponsiveCardList;
