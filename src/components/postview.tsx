import dayjs from "dayjs";
import Link from "next/link";
import { type RouterOutputs } from "~/utils/api";

import Image from "next/image";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div className="flex flex-col">
      <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
        <Image
          src={author.profilePicture}
          className="h-14 w-14 rounded-full"
          alt="??"
          width={56}
          height={56}
        />
        <div className="flex flex-col">
          <div className="flex gap-1 text-slate-300">
            <Link href={`/@${author.username}`}>
              <span>{`@${author.username}`}</span>
            </Link>
            <Link href={`/post/${post.id}`}>
              <span className="font-thin">{` * ${dayjs(
                post.createdAt
              ).fromNow()}`}</span>
            </Link>
          </div>
          <span className="text-2xl">{post.content}</span>
        </div>
      </div>
    </div>
  );
};