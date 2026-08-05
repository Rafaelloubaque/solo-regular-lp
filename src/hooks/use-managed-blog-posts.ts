import { useEffect, useState } from "react";
import {
  BLOG_POSTS_CHANGE_EVENT,
  getManagedBlogPosts,
  type ManagedBlogPost,
} from "@/lib/blog-store";

export function useManagedBlogPosts() {
  const [posts, setPosts] = useState<ManagedBlogPost[]>(() => getManagedBlogPosts());

  useEffect(() => {
    const refreshPosts = () => setPosts(getManagedBlogPosts());

    refreshPosts();
    window.addEventListener("storage", refreshPosts);
    window.addEventListener(BLOG_POSTS_CHANGE_EVENT, refreshPosts);

    return () => {
      window.removeEventListener("storage", refreshPosts);
      window.removeEventListener(BLOG_POSTS_CHANGE_EVENT, refreshPosts);
    };
  }, []);

  return posts;
}
