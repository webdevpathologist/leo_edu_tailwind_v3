export default function AboutUs() {
  const page_para_text = "text-gray-700" //"text-indigo-800"
  const page_para_text_dark ="text-green-300/95"
  
  return (
    <div className={`text-1xl flex items-center justify-between px-1 ${page_para_text} dark:${page_para_text_dark} lg:shadow-sm`}>
      <p className="leading-relaxed">
        Welcome to The Leo's Educational Academy, an innovative educational
        academy committed to providing a dynamic learning environment that
        encourages students to explore and grow. It is a brain child of Mrs.
        Aarthy who is driven by an ambitious vision of developing a curiosity
        for learning in students, encouraging them to discover their interests
        and fostering a love of learning.
        <br />
        <br />
        To achieve it in an optimal way, we have established associations with <a target={"_blank"} rel='noreferrer' class="underline decoration-2 box-decoration-slice decoration-green-600 font-bold dark:decoration-zinc-200/90 hover:animate-pulse" href="https://brainybobs.in/">reputed organizations</a> specializing in abacus, calligraphy, brain gym,
        handwriting, and other interactive curricula that enhance our student's
        learning experiences.
        <br />
        <br />
        We are committed to creating a supportive community that promotes
        academic excellence and personal growth. Send us your contact details in the form below & Join us on this journey of
        discovery and growth!
        <br />
      </p>
    </div>
  );
}
