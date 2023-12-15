import { siteConfig } from '@/config/site';
import { Card, CardBody } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card shadow="lg">
        <CardBody>
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              <Image
                src={'/cooperCodes.png'}
                alt=""
                width={200}
                height={200}
                className="justify-center rounded-lg border-large"
              />
            </div>

            <div className="flex justify-center pt-2">
              <h2 className="text-3xl font-bold ">Cooper Codes</h2>
            </div>

            <div className="flex justify-center m-4 gap-4">
              <Chip variant="shadow" color="primary" size="sm">
                Next.js 13
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                NextUI
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                Programmer
              </Chip>
            </div>

            <div className="flex justify-center max-w-sm">
              <p className="text-lg text-center font-semibold">
                I create software engineering tutorials. I also make music in my
                freetime!
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-4">
              <Link href={siteConfig.links.discord} target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-3">
                    <h3 className="self-center text-lg">Discord</h3>
                  </CardBody>
                </Card>
              </Link>
              <Link href={siteConfig.links.github} target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-3">
                    <h3 className="self-center text-lg">Github</h3>
                  </CardBody>
                </Card>
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank">
                <Card className="w-full" isHoverable>
                  <CardBody className="p-3">
                    <h3 className="self-center text-lg">Twitter</h3>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
